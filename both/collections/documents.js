// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

import DocumentSchema from './schemas/document';

Documents = new Mongo.Collection('documents');

// Must remember to attach the schema to the collection
Documents.attachSchema(DocumentSchema);

// We use explicit methods, so deny everything
Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});