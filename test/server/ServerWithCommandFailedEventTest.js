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
  ServerWithCommandFailedEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class CommandFailedEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithCommandFailedEvent(
      new CreatedServer(
        'mongodb://localhost', 27017,
        {monitorCommands: true}
      ),
      new CommandFailedEvent()
    ), Server
  )
).call();

