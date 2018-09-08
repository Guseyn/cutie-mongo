'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class IndexInformationByDb extends AsyncObject {

  constructor(db, name, options) {
    super(db, name, options || {});
  }

  definedAsyncCall() {
    return (db, name, options, callback) => {
      db.indexInformation(name, options, callback);
    }
  }
  
}

module.exports =  IndexInformationByDb;
