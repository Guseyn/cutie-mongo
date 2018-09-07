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
  AdminOfDb,
  ReplicaSetStatus
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;

new ConnectedMongoClient(
  mongoClient,
  'mongodb://localhost:27017', 
  { useNewUrlParser: true }
).as('mongoClient').after(
  new Assertion(
    new Is(
      new ReplicaSetStatus(
        new AdminOfDb(
          new DbOfMongoClient(
            as('mongoClient'), 'test'
          )
        ).as('admin')
      ), Object
    )
  ).after(
    new ClosedMongoClient(
      as('mongoClient')
    )
  )
)//.call(); TODO: fix with --replSet configuration (when ReplSet is done)
