 'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class DbWithParseErrorEvent extends AsyncObject {

  /*
    event is an Event with definedBody(error)
  */
  constructor(db, event) {
    super(db, event);
  }

  definedSyncCall() {
    return (db, event) => {
      db.on('parseError', event);
      return db;
    }
  }

}

module.exports = DbWithParseErrorEvent;