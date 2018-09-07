'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  ConnectedMongoClient,
  ClosedMongoClient,
  DbOfMongoClient,
  AdminOfDb,
  AddedUserToDb,
  RemovedUserFromDb
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new DeepEqualAssertion(
  new AddedUserToDb(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient,
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'), 'test'
      ).as('db'),
    'test-cutie-username-2',
    'test-cutie-password-2',
    {roles: [{ role: 'readWrite', db: 'test' }]}
  ), { user: 'test-cutie-username-2', pwd: '' }
).after(
  new RemovedUserFromDb(
    as('db'),
    'test-cutie-username-2'
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
).call();
