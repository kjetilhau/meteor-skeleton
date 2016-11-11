import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

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
  check(id, String);
  return Documents.find(id);
});
