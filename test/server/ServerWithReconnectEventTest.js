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
  ServerWithReconnectEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class ReconnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithReconnectEvent(
      new CreatedServer(
        'mongodb://localhost:27017'
      ),
      new ReconnectEvent()
    ), Server
  )
).call();

