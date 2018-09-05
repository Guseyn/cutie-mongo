'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is mongoClient
class ConnectedMongoClient extends AsyncObject {

  constructor(mongoClient, url, options) {
    super(mongoClient, url, options);
  }

  definedAsyncCall() {
    return (mongoClient, url, options, callback) => {
      return mongoClient.connect(url, options, callback);
    }
  }

}

module.exports = ConnectedMongoClient;