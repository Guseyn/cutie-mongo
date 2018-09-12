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
  DbWithReconnectEvent
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;

class ReconnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {

  }

}

new Assertion(
  new Is(
    new DbWithReconnectEvent(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      ), new ReconnectEvent()
    ), Db
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
