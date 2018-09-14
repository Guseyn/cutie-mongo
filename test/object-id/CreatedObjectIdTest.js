'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedObjectId
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new Is(
    new CreatedObjectId('123456789abc'), ObjectId
  )
).call();
