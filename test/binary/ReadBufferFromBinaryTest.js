'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedBinary,
  ReadBufferFromBinary
} = require('./../../index');

const Binary = require('mongodb').Binary;

new Assertion(
  new Is(
    new ReadBufferFromBinary(
      new CreatedBinary(Buffer.alloc(16))
    ), Buffer
  )
).call();
