// @ts-nocheck
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/server';
import { Request, Response } from 'express';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Fintary API Tests', () => {
    describe('General requests', () => {
        it('should return the health message when GET /health', (done) => {
            chai
                .request(app)
                .get('/health')
                .end((req: Request, res: Response) => {
                    expect(res).to.have.status(200);
                    expect(res.text).to.equal('Hey! If you can see this then everithing is working as expected!');
                    done();
            });
        });

        it('should return the 404 message when hitting a non existing route', (done) => {
            chai
                .request(app)
                .get('/nothing_here')
                .end((req: Request, res: Response) => {
                    expect(res).to.have.status(404);
                    expect(res.text).to.equal("404 - This is not the endpoint you're looking for!");
                    done();
                });
        });
    });

    describe('TransactionMatch requests', () => {
        it('should return 200 status and a match object when a simple order and transaction match', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [                    
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "1",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23
                        }
                    ]
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransaction')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Transactions matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it('should return 200 status and a match object when multiple orders for the same product, same customer, the same day and a transaction match', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }                    
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [                    
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "1",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23
                        }
                    ]
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransaction')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Transactions matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });        

        it('should return 200 status and a match object for an order with multiple transactions', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    },
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "refundIssued",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }                    
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23
                        },
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "refundIssued",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23
                        }
                    ]                  
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransaction')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Transactions matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it('should return 200 status and a match object for multiple orders with multiple transactions', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23
                    }                    
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23,
                        "transactionType": "payment-1",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 111.23
                    },
                    {
                        "type": "txn",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23,
                        "transactionType": "payment-2",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 111.23
                    },                    
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    },
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "refundIssued",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }                    
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Luke Skywalker",
                            "orderId": "1",
                            "date": "2023-07-10",
                            "product": "Product B",
                            "price": 111.23,
                            "transactionType": "payment-1",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 111.23
                        },
                        {
                            "type": "txn",
                            "customerName": "Luke Skywalker",
                            "orderId": "1",
                            "date": "2023-07-10",
                            "product": "Product B",
                            "price": 111.23,
                            "transactionType": "payment-2",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 111.23
                        }                        
                    ]
                ],
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23
                        },
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "refundIssued",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23
                        }
                    ]                  
                ]                
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransaction')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Transactions matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it("should return 200 status and an empty object when the payload doesn't has matching orders and transactions", (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [];

            chai
                .request(app)
                .post('/api/v1/matchTransaction')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('Transactions matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it("should return 500 status and an error when the payload object is not correct", (done) => {
            const payload = {
                "anyOtherStuff": [
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ]
            };

            chai
                .request(app)
                .post('/api/v1/matchTransaction')
                .send(payload)
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body.error).to.equal('An error occurred while processing the request!');
                    done();
                });
        });
    });
    describe('TransactionMatchReloaded requests', () => {
         it('should return 200 status and a match object when a simple order and transaction match at 100%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [                    
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "1",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        }
                    ]
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it('should return 200 status and a match object when multiple orders for the same product, same customer, the same day and a transaction match at 100%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }                    
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [                    
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "1",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        }
                    ]
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });        

        it('should return 200 status and a match object for an order with multiple transactions match at 100%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    },
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "refundIssued",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }                    
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        },
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "refundIssued",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        }
                    ]                  
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it('should return 200 status and a match object for multiple orders with multiple transactions match at 100%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23
                    }                    
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23,
                        "transactionType": "payment-1",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 111.23
                    },
                    {
                        "type": "txn",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23,
                        "transactionType": "payment-2",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 111.23
                    },                    
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    },
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "refundIssued",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }                    
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        },
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "refundIssued",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        }
                    ]                  
                ],
                [
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-10",
                        "product": "Product B",
                        "price": 111.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Luke Skywalker",
                            "orderId": "1",
                            "date": "2023-07-10",
                            "product": "Product B",
                            "price": 111.23,
                            "transactionType": "payment-1",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 111.23,
                            "matchConfidence": 1
                        },
                        {
                            "type": "txn",
                            "customerName": "Luke Skywalker",
                            "orderId": "1",
                            "date": "2023-07-10",
                            "product": "Product B",
                            "price": 111.23,
                            "transactionType": "payment-2",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 111.23,
                            "matchConfidence": 1
                        }                        
                    ]
                ]                
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

         it('should return 200 status and a match object when a simple order and transaction match at more than 95%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product ab",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [                    
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "1",
                            "date": "2023-07-11",
                            "product": "Product ab",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 0.9577464788732394
                        }
                    ]
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

         it('should return 200 status and an empty object when a simple order and transaction match at less than 95%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Ave",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product ab",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it('should return 200 status and a wrong match object for an order with multiple transactions that match at more than 95%', (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    },
                    {
                        "type": "txn",
                        "customerName": "AlexAbe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "refundIssued",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }                    
                ]
            };

            const response = [
                [
                    {
                        "type": "order",
                        "customerName": "Alex Abe",
                        "orderId": "2",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    },
                    [
                        {
                            "type": "txn",
                            "customerName": "Alex Abe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "paymentReceived",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 1
                        },
                        {
                            "type": "txn",
                            "customerName": "AlexAbe",
                            "orderId": "2",
                            "date": "2023-07-11",
                            "product": "Product A",
                            "price": 1.23,
                            "transactionType": "refundIssued",
                            "transactionDate": "2023-07-12",
                            "transactionAmount": 1.23,
                            "matchConfidence": 0.9565217391304348
                        }
                    ]                  
                ]
            ];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it("should return 200 status and an empty object when the payload doesn't has matching orders and transactions", (done) => {
            const payload = {
                "orders": [
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ],
                "transactions": [
                    {
                        "type": "txn",
                        "customerName": "Alex Abe",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23,
                        "transactionType": "paymentReceived",
                        "transactionDate": "2023-07-12",
                        "transactionAmount": 1.23
                    }
                ]
            };

            const response = [];

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal('TransactionsReloaded matched successfully!');
                    expect(res.body.matchedRecords).to.deep.equal(response);
                    done();
                });
        });

        it("should return 500 status and an error when the payload object is not correct", (done) => {
            const payload = {
                "anyOtherStuff": [
                    {
                        "type": "order",
                        "customerName": "Luke Skywalker",
                        "orderId": "1",
                        "date": "2023-07-11",
                        "product": "Product A",
                        "price": 1.23
                    }
                ]
            };

            chai
                .request(app)
                .post('/api/v1/matchTransactionReloaded')
                .send(payload)
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body.error).to.equal('An error occurred while processing the request!');
                    done();
                });
        });
    });
});
