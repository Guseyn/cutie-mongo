'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsConnected extends AsyncObject {

  constructor(mongoClient, options) {
    super(mongoClient, options);
  }

  definedSyncCall() {
    return (mongoClient, options) => {
      return mongoClient.isConnected(options);
    }
  }

}

module.exports = IsConnected;