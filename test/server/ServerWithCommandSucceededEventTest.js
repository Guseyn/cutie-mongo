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
  ServerWithCommandSucceededEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class CommandSucceededEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithCommandSucceededEvent(
      new CreatedServer(
        'mongodb://localhost:27017',
        {monitorCommands: true}
      ),
      new CommandSucceededEvent()
    ), Server
  )
).call();

