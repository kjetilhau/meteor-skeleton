// ***************************************************************
// METHODS (related to specific collection, etc.)
// ***************************************************************

Meteor.methods({

  "documents.create": function(doc) {
    check(doc, DocumentSchema);

    // Additional validation here...

    Documents.insert(doc, function(error, result) {
      if (error) {
        console.log(error);
      }
    });
  },

  "documents.update": function(doc, documentId) {
    check(doc, DocumentSchema);

    Documents.update(documentId, doc, function(error, result) {
      if (error) {
        console.log(error);
      }
    });
  },

  "documents.delete": function(documentId) {
    check(documentId, String);

    Documents.remove(documentId, function(error, result) {
      if (error) {
        console.log(error);
      }
    });
  }

});