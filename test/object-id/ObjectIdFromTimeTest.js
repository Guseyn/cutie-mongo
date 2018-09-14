'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  ObjectIdFromTime
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new Is(
    new ObjectIdFromTime(
      new Date().getTime()
    ), ObjectId
  )
).call();
