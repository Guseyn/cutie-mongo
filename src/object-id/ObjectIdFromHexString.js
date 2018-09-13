'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ObjectId = require('mongodb').ObjectId;

// Represented result is objectId
class ObjectIdFromHexString extends AsyncObject {

  constructor(hexString) {
    super(hexString);
  }

  definedSyncCall() {
    return (hexString) => {
      return ObjectId.createFromHexString(hexString);
    }
  }

}

module.exports = ObjectIdFromHexString;
