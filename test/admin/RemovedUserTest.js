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
  AddedUser,
  RemovedUser
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new DeepEqualAssertion(
  new AddedUser(
    new AdminOfDb(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient,
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'), 'test'
      )
    ).as('admin'),
    'test-cutie-username-1',
    'test-cutie-password',
    {roles: [{ role: 'readWrite', db: 'test' }]}
  ), { user: 'test-cutie-username-1', pwd: '' }
).after(
  new DeepEqualAssertion(
    new RemovedUser(
      as('admin'),
      'test-cutie-username-1'
    ), {
      username: 'test-cutie-username-1'
    }
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
).call();
