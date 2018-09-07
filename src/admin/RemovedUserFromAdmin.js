'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is user
class RemovedUserFromAdmin extends AsyncObject {

  constructor(admin, username, options) {
    super(admin, username, options || {});
  }

  definedAsyncCall() {
    return (admin, username, options, callback) => {
      this.user = {
        user: username
      };
      admin.removeUser(username, options, callback);
    }
  }

  onResult() {
    return this.user;
  }
  
}

module.exports =  RemovedUserFromAdmin;