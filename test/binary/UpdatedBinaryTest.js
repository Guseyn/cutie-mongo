'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedBinary,
  UpdatedBinary
} = require('./../../index');

const Binary = require('mongodb').Binary;

new Assertion(
  new Is(
    new UpdatedBinary(
      new CreatedBinary(Buffer.alloc(16)), 1
    ), Binary
  )
).call();
