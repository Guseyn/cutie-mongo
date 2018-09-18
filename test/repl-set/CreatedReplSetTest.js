'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedServer,
  ArrayOfServers,
  CreatedReplSet
} = require('./../../index');

const ReplSet = require('mongodb').ReplSet;

new Assertion(
  new Is(
    new CreatedReplSet(
      new ArrayOfServers(
        new CreatedServer('mongodb://localhost', 27017),
        new CreatedServer('mongodb://localhost', 27018),
        new CreatedServer('mongodb://localhost', 27019)
      )
    ), ReplSet
  )
).call();
