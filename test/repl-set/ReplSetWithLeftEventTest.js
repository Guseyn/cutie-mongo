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
  ReplSetWithLeftEvent
} = require('./../../index');

const ReplSet = require('mongodb').ReplSet;

class LeftEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ReplSetWithLeftEvent(
      new CreatedReplSet(
        new ArrayOfServers(
          new CreatedServer('mongodb://localhost', 27017),
          new CreatedServer('mongodb://localhost', 27018),
          new CreatedServer('mongodb://localhost', 27019)
        )
      ), new LeftEvent()
    ), ReplSet
  )
).call();
