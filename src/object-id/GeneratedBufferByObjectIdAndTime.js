'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class GeneratedBufferByObjectIdAndTime extends AsyncObject {

  constructor(objectId, time) {
    super(objectId, time);
  }

  definedSyncCall() {
    return (objectId, time) => {
      return objectId.generate(time);
    }
  }

}

module.exports = GeneratedBufferByObjectIdAndTime;
