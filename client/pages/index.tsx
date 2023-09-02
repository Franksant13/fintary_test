import { SetStateAction, useState } from 'react';
import { JsonPlaceholder } from '@/components/JsonPlaceholder';
import { Order, Transaction } from '../../@types/index';
import dataOrders from '../../data/orders.json';
import dataTransactions from '../../data/transactions.json';
import dataOrdersCorrupted from '../../data/orders_corrupted.json';
import dataTransactionsCorrupted from '../../data/transactions_corrupted.json';

export default function Home() {
	const [orders, setOrders] = useState<string>(JSON.stringify(dataOrders));
	const [transactions, setTransactions] = useState<string>(JSON.stringify(dataTransactions));
	const [selectedOption, setSelectedOption] = useState('1');
	const [selectedText, setSelectedText] = useState('Normal');
	const [errorJson, setErrorJson] = useState('');
	const [responseJson, setResponseJson] = useState('');
	const [responseMessage, setResponseMessage] = useState('');

	const handleOptionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setSelectedOption(event.target.value);
		if(event.target.value === "1"){
			setOrders(JSON.stringify(dataOrders));
			setTransactions(JSON.stringify(dataTransactions));
			setSelectedText("Normal");
		} else {
			setOrders(JSON.stringify(dataOrdersCorrupted));
			setTransactions(JSON.stringify(dataTransactionsCorrupted));
			setSelectedText("Corrupted");
		}
	};

	const handleSimpleMatching = () => {
		try {
			setErrorJson("");
			const jsonOrders: Order[] = JSON.parse(orders);
			const jsonTransactions: Transaction[] = JSON.parse(transactions);
			const data = {orders: jsonOrders, transactions: jsonTransactions};

			const requestOptions: RequestInit = {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			};

			fetch('http://localhost:5000/api/v1/matchTransaction', requestOptions)
				.then((response) => response.json())
				.then((data) => {
					console.log('Response from Simple Matching:', data);
					setResponseJson(JSON.stringify(data.matchedRecords));
					setResponseMessage(data.message);
				})
				.catch((error) => {
					console.error('Error from Simple Matching:', error);
					setResponseMessage("Error from Simple Matching");
				});
		} catch (err){
			setErrorJson("There was an error with the json files.")
		}

	}

	const handleEnhancedMatching = () => {
		try {
			setErrorJson("");
			const jsonOrders: Order[] = JSON.parse(orders);
			const jsonTransactions: Transaction[] = JSON.parse(transactions);
			const data = {orders: jsonOrders, transactions: jsonTransactions};

			const requestOptions: RequestInit = {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			};

			fetch('http://localhost:5000/api/v1/matchTransactionReloaded', requestOptions)
				.then((response) => response.json())
				.then((data) => {
					console.log('Response from Enhanced Matching:', data);
					setResponseJson(JSON.stringify(data.matchedRecords));
					setResponseMessage(data.message);
				})
				.catch((error) => {
					console.error('Error from Enhanced Matching:', error);
					setResponseMessage("Error from Enhanced Matching");
				});
		} catch (err){
			setErrorJson("There was an error with the json files.")
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Fintary Test
					</h2>
			</div>
			<div className="place-items-center">
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					A test App using ReactJS-NextJS and NodeJS-Express.
				</p>
			</div>
			<div className="place-items-center mt-2 mb-2">
				<div>
					<h2>Select data type:</h2>
					<select 
						value={selectedOption} 
						onChange={handleOptionChange}
						style={{ backgroundColor: 'lightgray', color: 'black' }}
					>
						<option value="1">Normal data</option>
						<option value="2">Corrupted data</option>
					</select>
					<p>You selected: {selectedText}</p>
				</div>
			</div>
			<div className="flex place-items-center">
				<JsonPlaceholder
					title={"Orders"}
					value={orders}
					onChange={(event) => setOrders(event.target.value)}
				/>
				<JsonPlaceholder
					title={"Transactions"}
					value={transactions}
					onChange={(event) => setTransactions(event.target.value)}
				/>
			</div>
			<div className="flex place-items-center">
				<button
					onClick={handleSimpleMatching}
					className="bg-blue-500 text-white rounded px-4 py-2 m-2"
					>
					Use simple matching
				</button>

				<button
					onClick={handleEnhancedMatching}
					className="bg-red-500 text-white rounded px-4 py-2 m-2"
					>
					Use enhanced matching
				</button>
			</div>
			<div className="flex place-items-center">
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					{errorJson}
				</p>
			</div>
			<div className="flex place-items-center">
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					{responseMessage}
				</p>
			</div>
			<div className="flex place-items-center">
				<JsonPlaceholder
					title={"Response"}
					value={responseJson}
					onChange={(event) => setTransactions(event.target.value)}
				/>
			</div>
		</main>
	)
}
