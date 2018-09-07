'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ServerStatus extends AsyncObject {

  constructor(admin, options) {
    super(admin, options || {});
  }

  definedAsyncCall() {
    return (admin, options, callback) => {
      admin.serverStatus(options, callback);
    }
  }

}

module.exports =  ServerStatus;
