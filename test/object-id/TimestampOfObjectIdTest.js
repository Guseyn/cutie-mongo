'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedObjectId,
  TimestampOfObjectId
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new Is(
    new TimestampOfObjectId(
      new CreatedObjectId('123456789abc')
    ), Date
  )
).call();
