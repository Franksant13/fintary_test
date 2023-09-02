# Fintary Test!

A test App using ReactJS-NextJS, NodeJS-Express and Typescript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)

## Introduction

This application consists of a backend in NodeJS using Express to create API Rest Endpoints. The frontend is built using ReactJS in conjunction with NextJS and uses the native fetch method to consume the backend API's. Typescript was used in the whole project.


The objective of this App is to make matches between an orders json object and a transactions json object. Where each order can have several associated transactions.

## Features

The application has a health check endpoint that can be verified at the address
>http://localhost:5000/health

It has an endpoint to perform a simple match between orders and transactions. This match verifies that the Customer Name, Order Id, Date, Product and Price fields match between the order and its transactions.
>http://localhost:5000/api/v1/matchTransaction

It has another endpoint to perform an improved match in which it uses an external library that implements the Sørensen–Dice coefficient algorithm to search for similarity between strings. This algorithm returns a number between 0 and 1. The closer to 1, the more similar the strings are. The value seted to determine if a transaction belongs to an order is 0.95.
This can help prevent false positives, where two strings are mistakenly considered a match when they are not.
This value can be changed depending on the business needs.
More information is needed on the importance of having exact matches in order to provide a more accurate estimate of this value that meets those needs.
>http://localhost:5000/api/v1/matchTransactionReloaded

The data used to manage these endpoints are defined as follows:

    Order {
        type: string;
        customerName: string;
        orderId: string;
        date: string;
        product: string;
        price: number;
    }

    Transaction {
        type: string;
        customerName: string;
        orderId: string;
        date: string;
        product: string;
        price: number;
        transactionType: string;
        transactionDate: string;
        transactionAmount: number;
        matchConfidence?: number;
    }

The matchConfidence field was added to the transaction object, which is returned only in the improved endpoint. This field indicates the level of confidence that the 2 strings are equal, that is, that the transaction belongs to the order.

The endpoints are accessible through the React UI in which you can choose which match you want to perform. In the same way the UI reads some json files with test data. There are 2 types of files for orders and transactions. The one type contains normal unaltered data and the other type has corrupted data to test the enhanced match.

The endpoints can be tested usign an HTTP request tool like Postman.

Also in the backend, a series of unit tests were set up in order to verify the correct functioning of the algorithms used for normal matching and improved matching.


To run the tests you have to use the command
>npm test
in the root directory of the project

## Getting Started

Clone this repository on your local env.

To install the backend dependencies, in the root directory of the project run
>npm install

To install the frontend dependencies, in the /client directory of the project run
>npm install

To run the backend unit tests, in the root directory of the project run
>npm test

To run the entire project, in the root directory run
>npm start
That will start in a single console both backend and frontend
The frontend will run on port 3000 and the backend on port 5000.

### Prerequisites

NodeJS 19.6.0 was used in this project. 
