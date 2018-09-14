'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class AreObjectIdsEqual extends AsyncObject {

  constructor(objectId, otherId) {
    super(objectId, otherId);
  }

  definedSyncCall() {
    return (objectId, otherId) => {
      return objectId.equals(otherId);
    }
  }

}

module.exports = AreObjectIdsEqual;
