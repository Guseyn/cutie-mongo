'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class StringFromDecimal128 extends AsyncObject {

  constructor(decimal128) {
    super(decimal128);
  }

  definedSyncCall() {
    return (decimal128) => {
      return decimal128.toString();
    }
  }
  
}

module.exports =  StringFromDecimal128;
