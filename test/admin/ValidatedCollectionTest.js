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
  CreatedCollection,
  ValidatedCollection
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new CreatedCollection(
  new DbOfMongoClient(
    new ConnectedMongoClient(
      mongoClient,
      'mongodb://localhost:27017', 
      { useNewUrlParser: true }
    ).as('mongoClient'), 'cutie-db'
  ).as('db'), 'cutie-collection'
).after(
  new Assertion(
    new Is(
      new ValidatedCollection(
        new AdminOfDb(
          as('db')
        ).as('admin'), 'cutie-db.cutie-collection'
      ), Object
    )
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
).call();
