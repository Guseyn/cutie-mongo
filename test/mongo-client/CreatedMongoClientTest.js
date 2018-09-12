'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion,
  EqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedMongoClient,
  ClosedMongoClient, 
  IsConnected
} = require('./../../index');

const MongoClient = require('mongodb').MongoClient;

new Assertion(
  new Is(
    new CreatedMongoClient(
      'mongodb://localhost:27017', 
      { useNewUrlParser: true }
    ).as('mongoClient'),
    MongoClient
  )
).after(
  new EqualAssertion(
    new IsConnected(as('mongoClient')), false
  ).after(
    new ClosedMongoClient(as('mongoClient'))
  )
).call();
