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
  MongoClientWithSession
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new MongoClientWithSession(
      new ConnectedMongoClient(
        mongoClient, 
        'mongodb://localhost:27017', 
        { useNewUrlParser: true }
      ).as('mongoClient'), (session) => {}
    ), mongoClient
  )
).after(
  new ClosedMongoClient(
    as('mongoClient')
  )
).call();
