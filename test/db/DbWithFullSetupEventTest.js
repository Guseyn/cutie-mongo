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
  DbWithFullSetupEvent
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;

class FullSetupEvent extends Event {

  constructor() {
    super();
  }

  definedBody(db) {
    
  }

}

new Assertion(
  new Is(
    new DbWithFullSetupEvent(
      new DbOfMongoClient(
        new ConnectedMongoClient(
          mongoClient, 
          'mongodb://localhost:27017', 
          { useNewUrlParser: true }
        ).as('mongoClient'),
        'test-cutie-db'
      ), new FullSetupEvent()
    ), Db
  )
).after(
  new ClosedMongoClient(as('mongoClient'))
).call()
