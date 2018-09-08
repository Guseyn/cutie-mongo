'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class WatchedDb extends AsyncObject {

  constructor(db, pipeline, options) {
    super(db, pipeline || [], options || {});
  }

  definedSyncCall() {
    return (db, pipeline, options) => {
      db.watch(pipeline, options);
      return db;
    }
  }
  
}

module.exports =  WatchedDb;
