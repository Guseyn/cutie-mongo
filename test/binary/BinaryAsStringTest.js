'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  CreatedBinary,
  BinaryAsString
} = require('./../../index');

const Binary = require('mongodb').Binary;

new Assertion(
  new IsString(
    new BinaryAsString(
      new CreatedBinary(Buffer.alloc(16))
    )
  )
).call();
