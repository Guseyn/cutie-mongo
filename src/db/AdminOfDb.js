'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is admin
class AdminOfDb extends AsyncObject {

  constructor(db) {
    super(db);
  }

  definedSyncCall() {
    return (db) => {
      return db.admin();
    }
  }
  
}

module.exports =  AdminOfDb;