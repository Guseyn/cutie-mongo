'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const Server = require('mongodb').Server;

// Represented result is server
class CreatedServer extends AsyncObject {

  constructor(host, port, options) {
    super(host, port, options || {});
  }

  definedSyncCall() {
    return (host, port, options) => {
       return new Server(host, port, options);
    }
  }

}

module.exports = CreatedServer;
