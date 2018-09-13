'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  CreatedBinary,
  LengthOfBinary
} = require('./../../index');

const Binary = require('mongodb').Binary;

new EqualAssertion(
  new LengthOfBinary(
    new CreatedBinary(Buffer.alloc(16))
  ), 16
).call();
