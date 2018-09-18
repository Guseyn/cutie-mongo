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
  ReplSetWithConnectEvent
} = require('./../../index');

const ReplSet = require('mongodb').ReplSet;

class ConnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ReplSetWithConnectEvent(
      new CreatedReplSet(
        new ArrayOfServers(
          new CreatedServer('mongodb://localhost', 27017),
          new CreatedServer('mongodb://localhost', 27018),
          new CreatedServer('mongodb://localhost', 27019)
        )
      ), new ConnectEvent()
    ), ReplSet
  )
).call();
