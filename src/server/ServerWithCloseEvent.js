'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ServerWithCloseEvent extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('close', event);
      return server;
    }
  }

}

module.exports = ServerWithCloseEvent;
