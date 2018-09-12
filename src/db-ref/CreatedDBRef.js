'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const DBRef = require('mongodb').DBRef;

// Represented result is dbRef
class CreatedDBRef extends AsyncObject {

  constructor(namespace, oid, db) {
    super(namespace, oid, db);
  }

  definedSyncCall() {
    return (namespace, oid, db) => {
      return new DBRef(namespace, oid, db);
    }
  }

}

module.exports = CreatedDBRef;
