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
  ServerWithConnectEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class ConnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithConnectEvent(
      new CreatedServer(
        'mongodb://localhost:27017'
      ),
      new ConnectEvent()
    ), Server
  )
).call();

