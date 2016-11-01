import { Meteor } from 'meteor/meteor';
import { Lists } from '../documents.js';

// ***************************************************************
// PUBLICATIONS (For the documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('documents', function documents() {
  return Documents.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('document', function document(id) {
  return Documents.find(id);
});
