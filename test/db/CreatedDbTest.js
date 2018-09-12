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
  CreatedDb,
  CreatedServer
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;

new Assertion(
  new Is(
    new CreatedDb(
      'dbNameTest', 
      new CreatedServer(
        'http://127.0.0.1/'
      )
    ), Db
  )
).call();
