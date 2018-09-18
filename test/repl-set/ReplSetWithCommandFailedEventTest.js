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
  ArrayOfServers,
  CreatedReplSet,
  ReplSetWithCommandFailedEvent
} = require('./../../index');

const ReplSet = require('mongodb').ReplSet;

class CommandFailedEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ReplSetWithCommandFailedEvent(
      new CreatedReplSet(
        new ArrayOfServers(
          new CreatedServer('mongodb://localhost', 27017),
          new CreatedServer('mongodb://localhost', 27018),
          new CreatedServer('mongodb://localhost', 27019)
        ), {monitorCommands: true}
      ), new CommandFailedEvent()
    ), ReplSet
  )
).call();
