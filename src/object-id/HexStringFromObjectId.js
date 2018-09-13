'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class HexStringFromObjectId extends AsyncObject {

  constructor(objectId) {
    super(objectId);
  }

  definedSyncCall() {
    return (objectId) => {
      return objectId.toHexString();
    }
  }

}

module.exports = HexStringFromObjectId;
