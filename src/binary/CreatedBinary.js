'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const Binary = require('mongodb').Binary;

// Represented result is binary
class CreatedBinary extends AsyncObject {

  constructor(buffer, subType) {
    super(buffer, subType);
  }

  definedSyncCall() {
    return (buffer, subType) => {
      return new Binary(buffer, subType);
    }
  }

}

module.exports = CreatedBinary;
