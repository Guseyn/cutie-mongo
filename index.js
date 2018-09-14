module.exports = {

  AddedUserToAdmin: require('./src/admin/AddedUserToAdmin'),
  BuildInfo: require('./src/admin/BuildInfo'),
  ExecutedCommandOfAdmin: require('./src/admin/ExecutedCommandOfAdmin'),
  ListDatabases: require('./src/admin/ListDatabases'),
  Ping: require('./src/admin/Ping'),
  RemovedUserFromAdmin: require('./src/admin/RemovedUserFromAdmin'),
  ReplicaSetStatus: require('./src/admin/ReplicaSetStatus'),
  ServerInfo: require('./src/admin/ServerInfo'),
  ServerStatus: require('./src/admin/ServerStatus'),
  ValidatedCollection: require('./src/admin/ValidatedCollection'),

  BinaryAsString: require('./src/binary/BinaryAsString'),
  BinaryWithWrittenString: require('./src/binary/BinaryWithWrittenString'),
  CreatedBinary: require('./src/binary/CreatedBinary'),
  LengthOfBinary: require('./src/binary/LengthOfBinary'),
  ReadBufferFromBinary: require('./src/binary/ReadBufferFromBinary'),
  UpdatedBinary: require('./src/binary/UpdatedBinary'),

  CreatedCode: require('./src/code/CreatedCode'),

  AddedUserToDb: require('./src/db/AddedUserToDb'),
  AdminOfDb: require('./src/db/AdminOfDb'),
  CollectionOfDb: require('./src/db/CollectionOfDb'),
  CollectionsOfDb: require('./src/db/CollectionsOfDb'),
  CreatedCollection: require('./src/db/CreatedCollection'),
  CreatedDb: require('./src/db/CreatedDb'),
  CreatedIndexByDb: require('./src/db/CreatedIndexByDb'),
  DbStats: require('./src/db/DbStats'),
  DbWithCloseEvent: require('./src/db/DbWithCloseEvent'),
  DbWithErrorEvent: require('./src/db/DbWithErrorEvent'),
  DbWithFullSetupEvent: require('./src/db/DbWithFullSetupEvent'),
  DbWithParseErrorEvent: require('./src/db/DbWithParseErrorEvent'),
  DbWithProfilingLevel: require('./src/db/DbWithProfilingLevel'),
  DbWithReconnectEvent: require('./src/db/DbWithReconnectEvent'),
  DbWithTimeoutEvent: require('./src/db/DbWithTimeoutEvent'),
  DroppedCollection: require('./src/db/DroppedCollection'),
  DroppedDatabase: require('./src/db/DroppedDatabase'),
  ExecutedCommandOfDb: require('./src/db/ExecutedCommandOfDb'),
  ExecutedDbAdminCommand: require('./src/db/ExecutedDbAdminCommand'),
  IndexInformationByDb: require('./src/db/IndexInformationByDb'),
  ListCollections: require('./src/db/ListCollections'),
  ProfilingLevel: require('./src/db/ProfilingLevel'),
  RemovedUserFromDb: require('./src/db/RemovedUserFromDb'),
  RenamedCollection: require('./src/db/RenamedCollection'),
  UnrefDb: require('./src/db/UnrefDb'),
  WatchedDb: require('./src/db/WatchedDb'),

  CreatedDBRef: require('./src/db-ref/CreatedDBRef'),

  Decimal128FromString: require('./src/decimal128/Decimal128FromString'),
  StringFromDecimal128: require('./src/decimal128/StringFromDecimal128'),

  ValueOfDouble: require('./src/double/ValueOfDouble'),

  ValueOfInt32: require('./src/int32/ValueOfInt32'),

  ChangeStreamOfMongoClient: require('./src/mongo-client/ChangeStreamOfMongoClient'),
  ClosedMongoClient: require('./src/mongo-client/ClosedMongoClient'),
  ConnectedMongoClient: require('./src/mongo-client/ConnectedMongoClient'),
  CreatedMongoClient: require('./src/mongo-client/CreatedMongoClient'),
  DbOfMongoClient: require('./src/mongo-client/DbOfMongoClient'),
  IsConnected: require('./src/mongo-client/IsConnected'),
  LoggedOutMongoClient: require('./src/mongo-client/LoggedOutMongoClient'),
  MongoClientWithSession: require('./src/mongo-client/MongoClientWithSession'),
  StartedSession: require('./src/mongo-client/StartedSession'),

  CreatedMongoError: require('./src/mongo-error/CreatedMongoError'),

  CreatedObjectId: require('./src/object-id/CreatedObjectId'),
  GeneratedBufferByTime: require('./src/object-id/GeneratedBufferByTime'),
  HexStringFromObjectId: require('./src/object-id/HexStringFromObjectId'),
  IsObjectIdEqualsTo: require('./src/object-id/IsObjectIdEqualsTo'),
  IsObjectIdValid: require('./src/object-id/IsObjectIdValid'),
  ObjectIdFromHexString: require('./src/object-id/ObjectIdFromHexString'),
  ObjectIdFromTime: require('./src/object-id/ObjectIdFromTime'),
  TimestampOfObjectId: require('./src/object-id/TimestampOfObjectId'),

  CreatedServer: require('./src/server/CreatedServer')

}
