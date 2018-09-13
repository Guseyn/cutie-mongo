'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ObjectId = require('mongodb').ObjectId;

// Represented result is objectId
class CreatedObjectId extends AsyncObject {

  constructor(id) {
    super(id);
  }

  definedSyncCall() {
    return (id) => {
      return new ObjectId(id);
    }
  }

}

module.exports = CreatedObjectId;
