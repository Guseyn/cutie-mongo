'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is collection
class CreatedCollection extends AsyncObject {

  constructor(db, name, options) {
    super(db, name, options || {});
  }

  definedAsyncCall() {
    return (db, name, options, callback) => {
      db.createCollection(name, options, callback);
    }
  }
  
}

module.exports =  CreatedCollection;
