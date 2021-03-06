'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ExecutedCommandOfAdmin extends AsyncObject {

  constructor(admin, command, options) {
    super(admin, command, options || {});
  }

  definedAsyncCall() {
    return (admin, command, options, callback) => {
      admin.command(command, options, callback);
    }
  }
  
}

module.exports =  ExecutedCommandOfAdmin;
