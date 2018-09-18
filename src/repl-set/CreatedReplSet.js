'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ReplSet = require('mongodb').ReplSet;

// Represented result is replSet
class CreatedReplSet extends AsyncObject {

  constructor(servers, options) {
    super(servers, options || {});
  }

  definedSyncCall() {
    return (servers, options) => {
      return new ReplSet(servers, options);
    }
  }

}

module.exports = CreatedReplSet;
