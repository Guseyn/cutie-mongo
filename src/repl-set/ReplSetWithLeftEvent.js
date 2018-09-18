'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithLeftEvent extends AsyncObject {

  /*
    event is an Event with definedBody(func(type, server))
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('left', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithLeftEvent;
