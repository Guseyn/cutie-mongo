'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is mongoClient
//TODO: fix
class LoggedOutMongoClient extends AsyncObject {

  constructor(mongoClient, options) {
    super(mongoClient, options);
  }

  definedAsyncCall() {
    return (mongoClient, options, callback) => {
      this.mongoClient = mongoClient;
      return mongoClient.logout(options, callback);
    }
  }

  onResult() {
    return this.mongoClient;
  }

}

module.exports = LoggedOutMongoClient;