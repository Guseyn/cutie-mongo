'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ObjectId = require('mongodb').ObjectId;

// Represented result is boolean
class IsObjectIdValid extends AsyncObject {

  constructor(objectId) {
    super(objectId);
  }

  definedSyncCall() {
    return (objectId) => {
      return ObjectId.isValid(objectId);
    }
  }

}

module.exports = IsObjectIdValid;
