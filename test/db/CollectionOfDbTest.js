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
  CollectionOfDb
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Collection = require('mongodb').Collection;

new Assertion(
  new Is(
    new CollectionOfDb(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      ), 'test-cutie-collection'
    ), Collection
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
