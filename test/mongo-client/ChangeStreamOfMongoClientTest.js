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
  ChangeStreamOfMongoClient,
  ClosedMongoClient
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const changeStream = require('mongodb/lib/change_stream');

new Assertion(
  new Is(
    new ChangeStreamOfMongoClient(
      new ConnectedMongoClient(
        mongoClient, 
        'mongodb://localhost:27017', 
        { useNewUrlParser: true }
      ).as('mongoClient')
    ),
    changeStream
  )
).after(
  new Assertion(
    new Is(
      new ClosedMongoClient(as('mongoClient')),
      mongoClient
    )
  )
).call();
