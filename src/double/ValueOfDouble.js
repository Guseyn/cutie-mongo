'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is value(number)
class ValueOfDouble extends AsyncObject {

  constructor(double) {
    super(double);
  }

  definedSyncCall() {
    return (double) => {
      return double.valueOf();
    }
  }
  
}

module.exports =  ValueOfDouble;
