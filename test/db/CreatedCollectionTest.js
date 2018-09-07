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
  CreatedCollection,
  DroppedCollection
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const collection = require('mongodb').Collection;

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
      ).as('db'), 'test-cutie-collection-5'
    ), collection
  )
).after(
  new DroppedCollection(
    as('db'), 'test-cutie-collection-5'
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
).call()
