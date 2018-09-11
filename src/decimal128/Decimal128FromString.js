'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const Decimal128 = require('mongodb').Decimal128;

// Represented result is decimal128
class Decimal128FromString extends AsyncObject {

  constructor(string) {
    super(string);
  }

  definedSyncCall() {
    return (string) => {
      return Decimal128.fromString(string);
    }
  }
  
}

module.exports =  Decimal128FromString;
