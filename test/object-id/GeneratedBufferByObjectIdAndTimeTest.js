'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedObjectId,
  GeneratedBufferByObjectIdAndTime
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new Is(
    new GeneratedBufferByObjectIdAndTime(
      new CreatedObjectId('123456789abc'), new Date().getTime()
    ), Buffer
  )
).call();
