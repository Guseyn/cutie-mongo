'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class DbWithProfilingLevel extends AsyncObject {

  constructor(db, level, options) {
    super(db, level, options || {});
  }

  definedAsyncCall() {
    return (db, level, options, callback) => {
      this.db = db;
      db.setProfilingLevel(level, options, callback);
    }
  }

  onResult() {
    return this.db;
  }
  
}

module.exports =  DbWithProfilingLevel;
