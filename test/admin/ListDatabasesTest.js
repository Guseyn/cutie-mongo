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
  ListDatabases
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new ListDatabases(
      new AdminOfDb(
        new DbOfMongoClient(
          new ConnectedMongoClient(
            mongoClient,
            'mongodb://localhost:27017', 
            { useNewUrlParser: true }
          ).as('mongoClient'), 'test'
        )
      ).as('admin')
    ), Object
  )
).after(
  new ClosedMongoClient(
    as('mongoClient')
  )
).call();
