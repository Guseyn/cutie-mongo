'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class Ping extends AsyncObject {

  constructor(admin, options) {
    super(admin, options || {});
  }

  definedAsyncCall() {
    return (admin, options, callback) => {
      admin.ping(options, callback);
    }
  }
  
}

module.exports =  Ping;
