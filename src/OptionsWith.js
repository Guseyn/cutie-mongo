'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is server
class OptionsWith extends AsyncObject {

  constructor(options, key, value) {
    super(options, key, value);
  }

  definedSyncCall() {
    return (options, key, value) => {
       options[key] = value;
       return options;
    }
  }

}

module.exports = OptionsWith;
