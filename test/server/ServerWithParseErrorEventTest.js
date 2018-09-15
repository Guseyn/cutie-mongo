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
  ServerWithParseErrorEvent
} = require('./../../index');

const Server = require('mongodb').Server;

class ParseErrorEvent extends Event {

  constructor() {
    super();
  }

  definedBody(obj) {}

}

new Assertion(
  new Is(
    new ServerWithParseErrorEvent(
      new CreatedServer(
        'mongodb://localhost:27017'
      ),
      new ParseErrorEvent()
    ), Server
  )
).call();

