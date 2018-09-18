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
  ServerWithTimeoutEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class TimeoutEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithTimeoutEvent(
      new CreatedServer(
        'mongodb://localhost', 27017,
      ),
      new TimeoutEvent()
    ), Server
  )
).call();

