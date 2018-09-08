'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  ConnectedMongoClient,
  ClosedMongoClient,
  DbOfMongoClient,
  CreatedCollection,
  DroppedCollection,
  CreatedIndexByDb
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const collection = require('mongodb').Collection;

new CreatedCollection(
  new DbOfMongoClient(
    new ConnectedMongoClient(
      mongoClient, 
      'mongodb://localhost:27017', 
      { useNewUrlParser: true }
    ).as('mongoClient'),
    'test-cutie-db'
  ).as('db'), 'test-cutie-collection-6'
).after(
  new Assertion(
    new IsString(
      new CreatedIndexByDb(
        as('db'),
        'test-cutie-collection-6',
        'index'
      )
    )
  ).after(
    new DroppedCollection(
      as('db'), 'test-cutie-collection-6'
    ).after(
      new ClosedMongoClient(
        as('mongoClient')
      )
    )
  )
).call()
