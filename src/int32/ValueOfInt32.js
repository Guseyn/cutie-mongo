'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is value(number)
class ValueOfInt32 extends AsyncObject {

  constructor(int32) {
    super(int32);
  }

  definedSyncCall() {
    return (int32) => {
      return int32.valueOf();
    }
  }
  
}

module.exports =  ValueOfInt32;
