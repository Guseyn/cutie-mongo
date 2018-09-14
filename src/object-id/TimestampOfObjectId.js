'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class TimestampOfObjectId extends AsyncObject {

  constructor(objectId) {
    super(objectId);
  }

  definedSyncCall() {
    return (objectId) => {
      return objectId.getTimestamp();
    }
  }

}

module.exports = TimestampOfObjectId;
