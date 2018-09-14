'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  CreatedObjectId,
  HexStringFromObjectId
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new IsString(
    new HexStringFromObjectId(
      new CreatedObjectId('123456789abc')
    )
  )
).call();
