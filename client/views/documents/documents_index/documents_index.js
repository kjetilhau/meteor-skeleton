Template.documentsIndex.onCreated(function() {
  this.subscribe('documents');
});

Template.documentsIndex.onRendered(function() {
});

Template.documentsIndex.onDestroyed(function() {
});

Template.documentsIndex.helpers({
  documents() {
    return Documents.find({}, {sort: {createdAt: -1}});
  }
});

Template.documentsIndex.events ({
});
