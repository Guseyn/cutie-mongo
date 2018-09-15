'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ServerWithTimeoutEvent extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('timeout', event);
      return server;
    }
  }

}

module.exports = ServerWithTimeoutEvent;
