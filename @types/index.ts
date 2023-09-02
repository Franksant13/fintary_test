    export interface Order {
        type: string;
        customerName: string;
        orderId: string;
        date: string;
        product: string;
        price: number;
    }

    export interface Transaction extends Order {
        transactionType: string;
        transactionDate: string;
        transactionAmount: number;
        matchConfidence?: number;
    }