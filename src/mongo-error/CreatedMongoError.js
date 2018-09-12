'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const MongoError = require('mongodb').MongoError;

// Represented result is mongoError
class CreatedMongoError extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      return new MongoError(message);
    }
  }
  
}

module.exports =  CreatedMongoError;
