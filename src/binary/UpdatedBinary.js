'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is binary
class UpdatedBinary extends AsyncObject {

  constructor(binary, byte_value) {
    super(binary, byte_value);
  }

  definedSyncCall() {
    return (binary, byte_value) => {
      binary.put(byte_value);
      return binary;
    }
  }

}

module.exports = UpdatedBinary;
