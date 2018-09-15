'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class ServerWithReconnectEvent extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.on('reconnect', event);
      return server;
    }
  }

}

module.exports = ServerWithReconnectEvent;
