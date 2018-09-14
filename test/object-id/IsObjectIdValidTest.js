'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedObjectId,
  IsObjectIdValid
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new IsObjectIdValid(
    new CreatedObjectId('123456789abc')
  )
).call();
