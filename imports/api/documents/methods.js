import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Documents } from './documents.js';
import DocumentSchema from './schemas/document';

// ***************************************************************
// CLIENT & SERVER METHODS (related to the documents collection)
// ***************************************************************

Meteor.methods({

  "documents.create": (doc) => {
    check(doc, DocumentSchema);

    return Documents.insert(doc, function(error, result) {
      if (error) {
        console.log(error);
      }
    });
  },

  "documents.update": (doc, documentId) => {
    check(doc, DocumentSchema);

    return Documents.update(documentId, doc, function(error, result) {
      if (error) {
        console.log(error);
      }
    });
  },

  "documents.delete": (documentId) => {
    check(documentId, String);

    return Documents.remove(documentId, function(error, result) {
      if (error) {
        console.log(error);
      }
    });
  }

});
