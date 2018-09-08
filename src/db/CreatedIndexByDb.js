'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is index(string)
class CreatedIndexByDb extends AsyncObject {

  constructor(db, name, fieldOrSpec, options) {
    super(db, name, fieldOrSpec, options || {});
  }

  definedAsyncCall() {
    return (db, name, fieldOrSpec, options, callback) => {
      db.createIndex(name, fieldOrSpec, options, callback);
    }
  }
  
}

module.exports =  CreatedIndexByDb;
