'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is collection
class CollectionOfDb extends AsyncObject {

  constructor(db, name, options) {
    super(db, name, options || {});
  }

  definedAsyncCall() {
    return (db, name, options, callback) => {
      db.collection(name, options, callback);
    }
  }
  
}

module.exports =  CollectionOfDb;