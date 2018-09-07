'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ListDatabases extends AsyncObject {

  constructor(admin, options) {
    super(admin, options || {});
  }

  definedAsyncCall() {
    return (admin, options, callback) => {
      admin.listDatabases(options, callback);
    }
  }
  
}

module.exports =  ListDatabases;
