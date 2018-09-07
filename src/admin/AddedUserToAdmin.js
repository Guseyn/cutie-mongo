'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is user
class AddedUserToAdmin extends AsyncObject {

  constructor(admin, username, password, options) {
    super(admin, username, password, options || {});
  }

  definedAsyncCall() {
    return (admin, username, password, options, callback) => {
      admin.addUser(username, password, options, callback);
    }
  }

  onResult(userArr) {
    return userArr[0];
  }
  
}

module.exports =  AddedUserToAdmin;