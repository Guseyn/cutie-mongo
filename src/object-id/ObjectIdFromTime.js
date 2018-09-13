'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const ObjectId = require('mongodb').ObjectId;

// Represented result is objectId
class ObjectIdFromTime extends AsyncObject {

  constructor(time) {
    super(time);
  }

  definedSyncCall() {
    return (time) => {
      return ObjectId.createFromTime(time);
    }
  }

}

module.exports = ObjectIdFromTime;
