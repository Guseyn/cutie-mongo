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
  UnrefDb
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;

new Assertion(
  new Is(
    new UnrefDb(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      )
    ), Db
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
