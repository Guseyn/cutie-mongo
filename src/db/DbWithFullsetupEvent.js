 'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class DbWithFullSetupEvent extends AsyncObject {

  /*
    event is an Event with definedBody(db)
  */
  constructor(db, event) {
    super(db, event);
  }

  definedSyncCall() {
    return (db, event) => {
      db.on('fullsetup', event);
      return db;
    }
  }

}

module.exports = DbWithFullSetupEvent;