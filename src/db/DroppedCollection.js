'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is collection(as name)
class DroppedCollection extends AsyncObject {

  constructor(db, name, options) {
    super(db, name, options || {});
  }

  definedAsyncCall() {
    return (db, name, options, callback) => {
      this.name = name;
      db.dropCollection(name, options, callback);
    }
  }

  onResult(res) {
    return this.name;
  }
  
}

module.exports =  DroppedCollection;
