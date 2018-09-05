'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  ConnectedMongoClient,
  ClosedMongoClient,
  LoggedOutMongoClient
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new LoggedOutMongoClient(
      new ConnectedMongoClient(
        mongoClient, 
        'mongodb://localhost:27017', 
        { useNewUrlParser: true }
      ).as('mongoClient'), {
        dbName: 'test'
      }, () => {}
    ), mongoClient
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
)//.call(); TODO: smth is wrong, logout method requires a db name as first argument
