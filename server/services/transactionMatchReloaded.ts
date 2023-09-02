import { Request, Response } from 'express';
import { Order, Transaction } from '../../@types/index';

// External library for finding string similarity
// Based on the Sørensen–Dice coefficient, this algorithm is most effective at detecting rearranged words or misspellings.
import { stringSimilarity } from "string-similarity-js";

// This function is an enhanced version of the previous transaction matching function.
// It uses a similarity measure to improve matching accuracy and adds a confidence score to matched transactions.
export function transactionMatchReloaded(req: Request, res: Response) {
    try {
        // Extract the orders and transactions from the request body
        const orders: Order[] = req.body.orders;
        const transactions: Transaction[] = req.body.transactions;

        // Initialize an array to store matched records, where each record is a tuple of an order and its matching transactions
        const matchedRecords: [Order, Transaction[]][] = [];

        // Create a Map to efficiently look up orders based on a unique key
        const orderMap = new Map<string, Order>();

        // Populate the orderMap with orders using a unique key
        orders.forEach(order => {
            const orderKey = `${order.customerName}-${order.orderId}-${order.date}-${order.product}-${order.price}`;
            orderMap.set(orderKey, order);
        });

        // Create a Map to associate orders with their matching transactions
        const orderTransactionsMap = new Map<Order, Transaction[]>();

        // Iterate through orders and transactions, using a similarity measure to improve matching accuracy
        orderMap.forEach((order, key) => {
            transactions.forEach(transaction => {
                // Generate a unique key for the transaction based on the same criteria that the key for orders
                const transactionKey: string = `${transaction.customerName}-${transaction.orderId}-${transaction.date}-${transaction.product}-${transaction.price}`; 
                
                // Calculate the matching confidence between the current transaction key and the current order key
                const matchingConfidence: number = stringSimilarity(transactionKey, key);

                // If the matching confidence is high (greater than or equal to 0.95), consider it a match
                // A threshold of 0.95 ensures that only strings with a very high degree of similarity are considered a match. 
                // This can help prevent false positives, where two strings are mistakenly considered a match when they are not.
                // This value can be changed depending on the business needs.
                // More information is needed on the importance of having exact matches in order to provide a more accurate estimate of this value that meets those needs.
                if(matchingConfidence >= 0.95){
                    const order = orderMap.get(key);
                    if (order) {
                        // Check if we already have a matchedRecord for this order
                        const matchedRecord = orderTransactionsMap.get(order);

                        // Create a new transaction object with the match confidence added
                        const transactionReloaded = {...transaction, "matchConfidence": matchingConfidence}

                        if (!matchedRecord) {
                            // If not, create a new matchedRecord with the order and the current transaction                           
                            orderTransactionsMap.set(order, [transactionReloaded]);
                        } else {
                            // If a matchedRecord already exists, add the current transaction to it
                            matchedRecord.push(transactionReloaded);
                        }
                    }
                }
            });
        });

        // Convert the orderTransactionsMap to an array of matchedRecords
        orderTransactionsMap.forEach((transactions, order) => {
            matchedRecords.push([order, transactions]);
        });

        // Respond with a JSON containing a success message and the matchedRecords
        res.json({ message: 'TransactionsReloaded matched successfully!', matchedRecords });
    } catch (error) {
        // If an error occurs during processing, respond with a 500 status and an error message
        res.status(500).json({ error: 'An error occurred while processing the request!' });
    }
}
