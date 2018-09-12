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
  CreatedMongoError
} = require('./../../index');

const MongoError = require('mongodb').MongoError;

new Assertion(
  new Is(
    new CreatedMongoError(
      'message'
    ), MongoError
  )
).call()
