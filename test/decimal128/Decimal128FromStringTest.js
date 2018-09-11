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
  Decimal128FromString,
  StringFromDecimal128
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Decimal128 = require('mongodb').Decimal128;

new Assertion(
  new Is(
    new Decimal128FromString(
      new StringFromDecimal128(
        new Decimal128(
          Buffer.alloc(16)
        )
      )
    ), Decimal128
  )
).call()
