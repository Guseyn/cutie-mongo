'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithParseErrorEvent extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('parseError', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithParseErrorEvent;
