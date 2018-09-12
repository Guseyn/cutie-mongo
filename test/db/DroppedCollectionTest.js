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
  DroppedCollection
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
        'test-cutie-db'
      ).as('db'), 'test-cutie-collection-7'
    ), Collection
  )
).after(
  new EqualAssertion(
    new DroppedCollection(
      as('db'), 'test-cutie-collection-7'
    ), 'test-cutie-collection-7'
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
).call()
