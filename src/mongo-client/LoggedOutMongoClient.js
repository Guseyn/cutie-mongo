'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const MongoClient = require('mongodb').MongoClient;

// Represented result is mongoClient
class LoggedOutMongoClient extends AsyncObject {

  constructor(mongoClient, options) {
    super(mongoClient, options || {});
  }

  definedAsyncCall() {
    return (mongoClient, options, callback) => {
      this.mongoClient = mongoClient;
      this.mongoClient.logout(options, callback);
    }
  }

  onResult() {
    return this.mongoClient;
  }

}

module.exports = LoggedOutMongoClient;