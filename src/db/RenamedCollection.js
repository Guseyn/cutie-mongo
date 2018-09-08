'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is collection
class RenamedCollection extends AsyncObject {

  constructor(db, fromCollection, toCollection, options) {
    super(db, fromCollection, toCollection, options || {});
  }

  definedAsyncCall() {
    return (db, fromCollection, toCollection, options, callback) => {
      db.renameCollection(fromCollection, toCollection, options, callback);
    }
  }
  
}

module.exports =  RenamedCollection;
