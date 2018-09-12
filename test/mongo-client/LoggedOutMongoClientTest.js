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
  { useNewUrlParser: true, authSource: 'test' }
).as('mongoClient').after(
  new DbOfMongoClient(
    as('mongoClient'), 'test'
  ).after(
    new Assertion(
      new Is(
        new LoggedOutMongoClient(
          as('mongoClient'), {dbName: 'test'}
        ), mongoClient
      )
    ).after(
      new ClosedMongoClient(as('mongoClient'))
    )
  ) 
).call();
