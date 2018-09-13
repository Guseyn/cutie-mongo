'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class BinaryAsString extends AsyncObject {

  constructor(binary) {
    super(binary);
  }

  definedSyncCall() {
    return (binary) => {
      return binary.value();
    }
  }

}

module.exports = BinaryAsString;
