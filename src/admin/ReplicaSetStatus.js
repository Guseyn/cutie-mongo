'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
//.call(); TODO: fix with --replSet configuration (when ReplSet is done)
class ReplicaSetStatus extends AsyncObject {

  constructor(admin, options) {
    super(admin, options || {});
  }

  definedAsyncCall() {
    return (admin, options, callback) => {
      admin.replSetGetStatus(options, callback);
    }
  }
  
}

module.exports =  ReplicaSetStatus;
