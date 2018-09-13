'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedBinary,
  BinaryWithWrittenString
} = require('./../../index');

const Binary = require('mongodb').Binary;

new Assertion(
  new Is(
    new BinaryWithWrittenString(
      new CreatedBinary(Buffer.alloc(16)), 'string', 0
    ), Binary
  )
).call();
