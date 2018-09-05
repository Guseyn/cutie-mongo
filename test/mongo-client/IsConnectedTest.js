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
  IsConnected
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new Assertion(
  new IsConnected(
    new ConnectedMongoClient(
      mongoClient, 
      'mongodb://localhost:27017', 
      { useNewUrlParser: true }
    ).as('mongoClient'),
    'test'
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
