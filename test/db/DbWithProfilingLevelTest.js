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
  DbWithProfilingLevel
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const db = require('mongodb').Db;

new Assertion(
  new Is(
    new DbWithProfilingLevel(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test'
      ), 'off'
    ), db
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
