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
  ServerWithCommandStartedEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class CommandStartedEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithCommandStartedEvent(
      new CreatedServer(
        'mongodb://localhost:27017',
        {monitorCommands: true}
      ),
      new CommandStartedEvent()
    ), Server
  )
).call();

