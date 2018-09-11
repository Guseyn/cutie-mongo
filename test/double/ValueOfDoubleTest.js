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
  ValueOfDouble
} = require('./../../index');

const mongoClient = require('mongodb').MongoClient;
const Double = require('mongodb').Double;

new Assertion(
  new IsNumber(
    new ValueOfDouble(
      new Double(64)
    )
  )
).call()
