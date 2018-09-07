'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class BuildInfo extends AsyncObject {

  constructor(admin, options) {
    super(admin, options || {});
  }

  definedAsyncCall() {
    return (admin, options, callback) => {
      admin.buildInfo(options, callback);
    }
  }
  
}

module.exports =  BuildInfo;
