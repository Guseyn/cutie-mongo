'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is replSet
class ReplSetWithHighAvailabilityEvent extends AsyncObject {

  /*
    event is an Event with definedBody(func(type, data.norepeat, data.id, data.state))
  */
  constructor(replSet, event) {
    super(replSet, event);
  }

  definedSyncCall() {
    return (replSet, event) => {
      replSet.on('ha', event);
      return replSet;
    }
  }

}

module.exports = ReplSetWithHighAvailabilityEvent;
