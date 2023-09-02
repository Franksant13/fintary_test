import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');
import { transactionMatch } from './services/transactionMatch';
import { transactionMatchReloaded } from './services/transactionMatchReloaded';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
const port = 5000;

app.use(cors());

// Healt endpoint for checking service availability
app.get('/health', (req: Request, res: Response) => {
	res.send('Hey! If you can see this then everithing is working as expected!');
});

// Endpoint for matching transactions
app.post('/api/v1/matchTransaction', transactionMatch);

// Endpoint for matching transactions RELOADED
// This endpoint uses a string similarity method to match the transactions with their most likely orders 
app.post('/api/v1/matchTransactionReloaded', transactionMatchReloaded);

// Not Found endpoint
app.use((req: Request, res: Response) => {
	res.status(404).send("404 - This is not the endpoint you're looking for!");
});

// Simple express server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

export default app;