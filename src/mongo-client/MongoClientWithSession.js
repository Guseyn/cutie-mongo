'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is mongoClient
class MongoClientWithSession extends AsyncObject {

  constructor(mongoClient, options, operation) {
    super(mongoClient, options, operation);
  }

  definedSyncCall() {
    return (mongoClient, options, operation) => {
      mongoClient.withSession(options, operation);
      return mongoClient;
    }
  }
  
}

module.exports =  MongoClientWithSession;