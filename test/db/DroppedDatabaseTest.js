'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion, EqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  ConnectedMongoClient,
  ClosedMongoClient,
  DbOfMongoClient,
  CreatedCollection,
  DroppedDatabase
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Collection = require('mongodb').Collection;

new Assertion(
  new Is(
    new CreatedCollection(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db-1'
      ).as('db'), 'test-cutie-collection-8'
    ), Collection
  )
).after(
  new EqualAssertion(
    new DroppedDatabase(
      as('db')
    ), 'test-cutie-db-1'
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
).call()
