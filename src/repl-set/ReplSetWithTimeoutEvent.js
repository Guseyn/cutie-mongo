'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithTimeoutEvent extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('timeout', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithTimeoutEvent;
