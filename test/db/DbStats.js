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
  DbStats
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new DbStats(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      )
    ), Object
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
