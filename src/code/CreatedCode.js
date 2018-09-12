'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const Code = require('mongodb').Code;

// Represented result is code
class CreatedCode extends AsyncObject {

  constructor(code, scope) {
    super(code, scope);
  }

  definedSyncCall() {
    return (code, scope) => {
      return new Code(code, scope);
    }
  }

}

module.exports = CreatedCode;
