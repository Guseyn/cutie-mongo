'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedCode
} = require('./../../index');

const Code = require('mongodb').Code;

new Assertion(
  new Is(
    new CreatedCode('code'), Code
  )
).call();
