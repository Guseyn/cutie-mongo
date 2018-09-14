'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedObjectId,
  AreObjectIdsEqual
} = require('./../../index');

const ObjectId = require('mongodb').ObjectId;

new Assertion(
  new AreObjectIdsEqual(
    new CreatedObjectId('123456789abc'),
    new CreatedObjectId('123456789abc')
  )
).call();
