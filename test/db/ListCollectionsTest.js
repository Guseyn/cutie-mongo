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
  DroppedCollection,
  ListCollections
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new CreatedCollection(
  new DbOfMongoClient(
    new ConnectedMongoClient(
      mongoClient, 
      'mongodb://localhost:27017', 
      { useNewUrlParser: true }
    ).as('mongoClient'),
      'test-cutie-db'
  ).as('db'), 'test-cutie-collection-10'
).after(
  new Assertion(
    new Is(
      new ListCollections(
        as('db')
      ), Object
    )
  ).after(
    new DroppedCollection(
      as('db'), 'test-cutie-collection-10'
    ).after(
      new ClosedMongoClient(
        as('mongoClient')
      )
    )
  )
).call()
