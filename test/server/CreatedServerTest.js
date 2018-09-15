'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedServer
} = require('./../../index');

const Server = require('mongodb').Server;

new Assertion(
  new Is(
    new CreatedServer('mongodb://localhost:27017'), Server
  )
).call();
