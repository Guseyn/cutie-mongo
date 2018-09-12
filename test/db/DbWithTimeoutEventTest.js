'use strict'

const {
  as, Event
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is,
  IsUndefined
} = require('@cuties/is');
const {
  ConnectedMongoClient,
  ClosedMongoClient,
  DbOfMongoClient,
  DbWithTimeoutEvent
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;

class TimeoutEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {

  }

}

new Assertion(
  new Is(
    new DbWithTimeoutEvent(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      ), new TimeoutEvent()
    ), Db
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
