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
  AdminOfDb,
  ExecutedCommand
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new ExecutedCommand(
      new AdminOfDb(
        new DbOfMongoClient(
          new ConnectedMongoClient(
            mongoClient,
            'mongodb://localhost:27017', 
            { useNewUrlParser: true }
          ).as('mongoClient'), 'test'
        )
      ).as('admin'), {'dbStats': 1}
    ), Object
  )
).after(
  new ClosedMongoClient(
    as('mongoClient')
  )
).call();
