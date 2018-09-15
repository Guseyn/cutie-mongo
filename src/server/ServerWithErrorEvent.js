'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ServerWithErrorEvent extends AsyncObject {

  /*
    event is an Event with definedBody(error)
  */
  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('error', event);
      return server;
    }
  }

}

module.exports = ServerWithErrorEvent;
