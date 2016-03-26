// ***************************************************************
// CLIENT & SERVER METHODS (related to the documents collection)
// ***************************************************************

import DocumentSchema from '../collections/schemas/document';

Meteor.methods({

  "documents.create": (doc) => {
    check(doc, DocumentSchema);

    // Additional validation here...

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
