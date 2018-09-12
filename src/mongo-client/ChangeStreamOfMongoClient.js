'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is changeStream
class ChangeStreamMongoClient extends AsyncObject {

  constructor(mongoClient, pipeline, options) {
    super(mongoClient, pipeline, options || {});
  }

  definedSyncCall() {
    return (mongoClient, pipeline, options) => {
      return mongoClient.watch(pipeline, options);
    }
  }
  
}

module.exports =  ChangeStreamMongoClient;
