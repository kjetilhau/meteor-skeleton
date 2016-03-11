// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

Documents = new Mongo.Collection('documents');

// Must remember to attach the schema to the collection
Documents.attachSchema(DocumentSchema);

// Allow and deny rules
Documents.deny({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

// TODO: Add allow false rules as well