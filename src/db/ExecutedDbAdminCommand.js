'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ExecutedDbAdminCommand extends AsyncObject {

  constructor(db, command, options) {
    super(db, command, options || {});
  }

  definedAsyncCall() {
    return (db, command, options, callback) => {
      db.executeDbAdminCommand(command, options, callback);
    }
  }
  
}

module.exports =  ExecutedDbAdminCommand;
