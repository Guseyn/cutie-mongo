'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is collections
class CollectionsOfDb extends AsyncObject {

  constructor(db, options) {
    super(db, options || {});
  }

  definedAsyncCall() {
    return (db, options, callback) => {
      db.collections(options, callback);
    }
  }
  
}

module.exports =  CollectionsOfDb;
