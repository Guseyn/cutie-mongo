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
  DbOfMongoClient,
  LoggedOutMongoClient
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new ConnectedMongoClient(
  mongoClient, 
  'mongodb://localhost:27017', 
  { useNewUrlParser: true }
).as('mongoClient').after(
  new DbOfMongoClient(
    as('mongoClient'), 'test'
  ).after(
    new Assertion(
      new Is(
        new LoggedOutMongoClient(
          as('mongoClient')
        ), mongoClient
      )
    ).after(
      new ClosedMongoClient(as('mongoClient'))
    )
  ) 
)//.call(); it does not work as expected
