'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is session
class StartedSession extends AsyncObject {

  constructor(mongoClient, options) {
    super(mongoClient, options);
  }

  definedSyncCall() {
    return (mongoClient, options) => {
      return mongoClient.startSession(options);
    }
  }
  
}

module.exports =  StartedSession;