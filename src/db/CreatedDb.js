'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const Db = require('mongodb').Db;

// Represented result is db
class CreatedDb extends AsyncObject {

  constructor(databaseName, topology, options) {
    super(databaseName, topology, options || {});
  }

  definedSyncCall() {
    return (databaseName, topology, options) => {
      return new Db(databaseName, topology, options);
    }
  }
  
}

module.exports =  CreatedDb;
