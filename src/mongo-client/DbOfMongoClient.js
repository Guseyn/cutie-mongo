'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class DbOfMongoClient extends AsyncObject {

  constructor(mongoClient, dbName, options) {
    super(mongoClient, dbName, options);
  }

  definedSyncCall() {
    return (mongoClient, dbName, options) => {
      return mongoClient.db(dbName, options);
    }
  }

}

module.exports = DbOfMongoClient;