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
  StartedSession
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const clientSession = require('mongodb').ClientSession;

new Assertion(
  new Is(
    new StartedSession(
      new ConnectedMongoClient(
        mongoClient, 
        'mongodb://localhost:27017', 
        { useNewUrlParser: true }
      ).as('mongoClient')
    ), clientSession    
  )
).after(
  new ClosedMongoClient(
    as('mongoClient')
  )
)//.call();

// TODO: it's needed to be checked on linux
