'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is user
class RemovedUserFromDb extends AsyncObject {

  constructor(db, username, options) {
    super(db, username, options || {});
  }

  definedAsyncCall() {
    return (db, username, options, callback) => {
      this.user = {
        user: username
      };
      db.removeUser(username, options, callback);
    }
  }

  onResult() {
    return this.user;
  }
  
}

module.exports =  RemovedUserFromDb;