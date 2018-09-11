'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  ValueOfInt32
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Int32 = require('mongodb').Int32;

new Assertion(
  new IsNumber(
    new ValueOfInt32(
      new Int32(32)
    )
  )
).call()
