'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class UnrefDb extends AsyncObject {

  constructor(db) {
    super(db);
  }

  definedSyncCall() {
    return (db) => {
      db.unref();
      return db;
    }
  }
  
}

module.exports =  UnrefDb;
