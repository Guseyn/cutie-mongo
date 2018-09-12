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
  DbWithCloseEvent
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    new Assertion(
      new IsUndefined(error)
    ).call();
  }

}

new Assertion(
  new Is(
    new DbWithCloseEvent(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      ), new CloseEvent()
    ), Db
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
