'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class LengthOfBinary extends AsyncObject {

  constructor(binary) {
    super(binary);
  }

  definedSyncCall() {
    return (binary) => {
      return binary.length();
    }
  }

}

module.exports = LengthOfBinary;
