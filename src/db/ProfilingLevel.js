'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class ProfilingLevel extends AsyncObject {

  constructor(db, options) {
    super(db, options || {});
  }

  definedAsyncCall() {
    return (db, options, callback) => {
      db.profilingLevel(options, callback);
    }
  }
  
}

module.exports =  ProfilingLevel;
