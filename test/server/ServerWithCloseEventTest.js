'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  CreatedServer,
  ServerWithCloseEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithCloseEvent(
      new CreatedServer('mongodb://localhost:27017'),
      new CloseEvent()
    ), Server
  )
).call();

