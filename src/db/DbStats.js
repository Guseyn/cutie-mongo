'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class DbStats extends AsyncObject {

  constructor(db, options) {
    super(db, options || {});
  }

  definedAsyncCall() {
    return (db, options, callback) => {
      db.stats(options, callback);
    }
  }
  
}

module.exports =  DbStats;
