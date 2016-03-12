// ***************************************************************
// PUBLICATIONS (For the documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('documents', function() {
  return Documents.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('document', function(id) {
  return Documents.find(id);
});