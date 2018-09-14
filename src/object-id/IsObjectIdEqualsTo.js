'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsObjectIdEqualsTo extends AsyncObject {

  constructor(objectId, otherId) {
    super(objectId, otherId);
  }

  definedSyncCall() {
    return (objectId, otherId) => {
      return objectId.equals(otherId);
    }
  }

}

module.exports = IsObjectIdEqualsTo;
