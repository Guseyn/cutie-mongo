'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
//  TODO: fix : ns not found
class ValidatedCollection extends AsyncObject {

  constructor(admin, collectionName, options) {
    super(admin, collectionName, options || {});
  }

  definedAsyncCall() {
    return (admin, collectionName, options, callback) => {
      admin.validateCollection(collectionName, options, callback);
    }
  }

}

module.exports =  ValidatedCollection;
