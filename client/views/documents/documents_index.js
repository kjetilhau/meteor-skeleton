Template.documentsIndex.onCreated(function() {
  this.subscribe('documents');
});

Template.documentsIndex.onRendered(function() {
});

Template.documentsIndex.onDestroyed(function() {
});

Template.documentsIndex.helpers({
  documents: function () {
    return Documents.find({}, {sort: {createdAt: -1}});
  }
});

Template.documentsIndex.events ({
  'click .delete-document': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Documents.remove(item._id);
      console.log("Document deleted")
    }
  }
});
