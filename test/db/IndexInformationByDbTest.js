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
  CreatedIndexByDb,
  IndexInformationByDb
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
  ).as('db'), 'test-cutie-collection-9'
).after(
  new CreatedIndexByDb(
    as('db'),
    'test-cutie-collection-9',
    'index'
  ).as('index').after(
    new Assertion(
      new Is(
        new IndexInformationByDb(
          as('db'),
          'test-cutie-collection-9'
        ), Object
      )
    ).after(
      new DroppedCollection(
        as('db'), 'test-cutie-collection-9'
      ).after(
        new ClosedMongoClient(
          as('mongoClient')
        )
      )
    )
  )
).call()
