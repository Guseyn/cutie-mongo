'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const MongoClient = require('mongodb').MongoClient;

// Represented result is mongoClient
class CreatedMongoClient extends AsyncObject {

  constructor(url, options) {
    super(url, options || {});
  }

  definedSyncCall() {
    return (url, options) => {
      return new MongoClient(url, options);
    }
  }

}

module.exports = CreatedMongoClient;
