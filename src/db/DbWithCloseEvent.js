'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class DbWithCloseEvent extends AsyncObject {

  /*
    event is an Event with definedBody(error)
  */
  constructor(db, event) {
    super(db, event);
  }

  definedSyncCall() {
    return (db, event) => {
      db.on('close', event);
      return db;
    }
  }

}

module.exports = DbWithCloseEvent;
