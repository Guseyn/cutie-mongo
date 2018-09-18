'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithErrorEvent extends AsyncObject {

  /*
    event is an Event with definedBody(error)
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('error', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithErrorEvent;
