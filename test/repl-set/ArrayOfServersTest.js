'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsArray
} = require('@cuties/is');
const {
  CreatedServer,
  ArrayOfServers
} = require('./../../index');

const Server = require('mongodb').Server;

new Assertion(
  new IsArray(
    new ArrayOfServers(
      new CreatedServer('mongodb://localhost', 27017),
      new CreatedServer('mongodb://localhost', 27018),
      new CreatedServer('mongodb://localhost', 27019)
    )
  )
).call();
