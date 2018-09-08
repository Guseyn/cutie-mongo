'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ListCollections extends AsyncObject {

  constructor(db, filter, options) {
    super(db, filter || {}, options || {});
  }

  definedSyncCall() {
    return (db, filter, options) => {
      return db.listCollections(filter, options);
    }
  }
  
}

module.exports =  ListCollections;
