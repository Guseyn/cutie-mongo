'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithConnectEvent extends AsyncObject {

  /*
    event is an Event with definedBody(replSet)
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('connect', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithConnectEvent;
