'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ServerWithCommandStarted extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('commandStarted', event);
      return server;
    }
  }

}

module.exports = ServerWithCommandStarted;
