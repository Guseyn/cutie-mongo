'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithJoinedEvent extends AsyncObject {

  /*
    event is an Event with definedBody(func(type, server))
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('joined', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithJoinedEvent;
