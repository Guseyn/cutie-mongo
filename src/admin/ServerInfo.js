'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class ServerInfo extends AsyncObject {

  constructor(admin, options) {
    super(admin, options || {});
  }

  definedAsyncCall() {
    return (admin, options, callback) => {
      admin.serverInfo(options, callback);
    }
  }

}

module.exports =  ServerInfo;
