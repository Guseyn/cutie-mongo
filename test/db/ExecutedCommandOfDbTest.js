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
  ExecutedCommandOfDb
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new ExecutedCommandOfDb(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient,
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'), 'test'
      ), {'dbStats': 1}
    ), Object
  )
).after(
  new ClosedMongoClient(
    as('mongoClient')
  )
).call();
