'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server[]
class ArrayOfServers extends AsyncObject {

  constructor(...servers) {
    super(...servers);
  }

  definedSyncCall() {
    return (...servers) => {
      return servers;
    }
  }

}

module.exports = ArrayOfServers;
