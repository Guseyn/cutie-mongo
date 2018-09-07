'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ExecutedCommandOfDb extends AsyncObject {

  constructor(db, command, options) {
    super(db, command, options || {});
  }

  definedAsyncCall() {
    return (db, command, options, callback) => {
      db.command(command, options, callback);
    }
  }
  
}

module.exports =  ExecutedCommandOfDb;
