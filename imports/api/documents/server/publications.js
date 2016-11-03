import { Meteor } from 'meteor/meteor';
import { Documents } from '../both/documents.js'

// ***************************************************************
// PUBLICATIONS (For the documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('documents.all', function documentsAll() {
  return Documents.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('documents.single', function documentsSingle(id) {
  return Documents.find(id);
});
