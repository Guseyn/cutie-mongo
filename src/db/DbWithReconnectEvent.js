 'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is db
class DbWithReconnectEvent extends AsyncObject {

  /*
    event is an Event with definedBody(obj)
  */
  constructor(db, event) {
    super(db, event);
  }

  definedSyncCall() {
    return (db, event) => {
      db.on('reconnect', event);
      return db;
    }
  }

}

module.exports = DbWithReconnectEvent;