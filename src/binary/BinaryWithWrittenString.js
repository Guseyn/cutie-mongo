'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is binary
class BinaryWithWrittenString extends AsyncObject {

  constructor(binary, string, offset) {
    super(binary, string, offset);
  }

  definedSyncCall() {
    return (binary, string, offset) => {
      binary.write(string, offset);
      return binary;
    }
  }

}

module.exports = BinaryWithWrittenString;
