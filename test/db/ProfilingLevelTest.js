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
  ProfilingLevel
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new IsString(
    new ProfilingLevel(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test'
      )
    )
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
