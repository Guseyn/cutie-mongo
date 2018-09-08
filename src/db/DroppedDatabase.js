'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db(as name)
class DroppedDatabase extends AsyncObject {

  constructor(db, options) {
    super(db, options || {});
  }

  definedAsyncCall() {
    return (db, options, callback) => {
      this.name = db.s.databaseName;
      db.dropDatabase(options, callback);
    }
  }

  onResult() {
    return this.name;
  }
  
}

module.exports =  DroppedDatabase;
