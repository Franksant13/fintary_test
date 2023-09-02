import { Request, Response } from 'express';
import { Order, Transaction } from '../../@types/index';

// This function is intended to match orders and transactions based on specific criteria
export function transactionMatch(req: Request, res: Response) {
    try {
        console.log(req.body)
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

        transactions.forEach(transaction => {
            // Generate a unique key for the transaction based on the same criteria that the key for orders
            const transactionKey: string = `${transaction.customerName}-${transaction.orderId}-${transaction.date}-${transaction.product}-${transaction.price}`;
            
            // Try to find a matching order using the transaction key
            const order = orderMap.get(transactionKey);

            if (order) {
                // Check if we already have a matchedRecord for this order
                const matchedRecord = orderTransactionsMap.get(order);

                if (!matchedRecord) {
                    // If not, create a new matchedRecord with the order and the current transaction
                    orderTransactionsMap.set(order, [transaction]);
                } else {
                    // If a matchedRecord already exists, add the current transaction to it
                    matchedRecord.push(transaction);
                }
            }
        });

        // Convert the orderTransactionsMap to an array of matchedRecords
        orderTransactionsMap.forEach((transactions, order) => {
            matchedRecords.push([order, transactions]);
        });

         // Respond with a JSON containing a success message and the matchedRecords
        res.json({ message: 'Transactions matched successfully!', matchedRecords });
    } catch (error) {
        console.log("errrr!")
        // If an error occurs during processing, respond with a 500 status and an error message
        res.status(500).json({ error: 'An error occurred while processing the request!' });
    }
}
