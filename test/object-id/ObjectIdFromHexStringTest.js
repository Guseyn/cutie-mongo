'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedObjectId,
  HexStringFromObjectId,
  ObjectIdFromHexString
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new Is(
    new ObjectIdFromHexString(
      new HexStringFromObjectId(
        new CreatedObjectId('123456789abc')
      )
    ), ObjectId
  )
).call();
