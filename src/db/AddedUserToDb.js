'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is user
class AddedUserToDb extends AsyncObject {

  constructor(db, username, password, options) {
    super(db, username, password, options || {});
  }

  definedAsyncCall() {
    return (db, username, password, options, callback) => {
      db.addUser(username, password, options, callback);
    }
  }

  onResult(userArr) {
    return userArr[0];
  }
  
}

module.exports =  AddedUserToDb;