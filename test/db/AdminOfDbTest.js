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
  AdminOfDb
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Admin = require('mongodb').Admin;

new Assertion(
  new Is(
    new AdminOfDb(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test'
      )
    ), Admin
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
