'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is buffer
class ReadBufferFromBinary extends AsyncObject {

  constructor(binary, position, length) {
    super(binary, position, length);
  }

  definedSyncCall() {
    return (binary, position, length) => {
      return binary.read(position, length);
    }
  }

}

module.exports = ReadBufferFromBinary;
