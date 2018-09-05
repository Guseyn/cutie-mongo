'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is mongoClient
class ClosedMongoClient extends AsyncObject {

  constructor(mongoClient, force) {
    super(mongoClient, force);
  }

  definedAsyncCall() {
    return (mongoClient, force, callback) => {
      this.mongoClient = mongoClient;
      return mongoClient.close(force, callback);
    }
  }

  onResult() {
    return this.mongoClient;
  }

}

module.exports = ClosedMongoClient;