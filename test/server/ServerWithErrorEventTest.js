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
  ServerWithErrorEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class ErrorEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {}

}

new Assertion(
  new Is(
    new ServerWithErrorEvent(
      new CreatedServer(
        'mongodb://localhost:27017'
      ),
      new ErrorEvent()
    ), Server
  )
).call();

