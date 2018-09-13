'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedBinary
} = require('./../../index');

const Binary = require('mongodb').Binary;

new Assertion(
  new Is(
    new CreatedBinary(Buffer.alloc(16)), Binary
  )
).call();
