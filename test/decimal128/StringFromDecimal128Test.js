'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  StringFromDecimal128
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Decimal128 = require('mongodb').Decimal128;

new Assertion(
  new IsString(
    new StringFromDecimal128(
      new Decimal128(
        Buffer.alloc(16)
      )
    )
  )
).call()
