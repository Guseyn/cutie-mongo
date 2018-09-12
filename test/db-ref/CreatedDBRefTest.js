'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedDBRef
} = require('./../../index');

const DBRef = require('mongodb').DBRef;
const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new Is(
    new CreatedDBRef('code', new ObjectId()), DBRef
  )
).call();
