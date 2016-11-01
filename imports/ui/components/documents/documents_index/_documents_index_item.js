Template.documentsIndexItem.onCreated(function() {
  this.getDocumentId = () => Template.instance().data.document._id;
});

Template.documentsIndexItem.onRendered(function() {
});

Template.documentsIndexItem.onDestroyed(function() {
});

Template.documentsIndexItem.helpers({
});

Template.documentsIndexItem.events ({
  'click .delete-document'(event, instance) {
    event.preventDefault();

    if (confirm("Are you sure?")) {
      Meteor.call('documents.delete', Template.instance().getDocumentId(), function (error, result) {
        if (error) {
          console.log(error.reason)
        }
        else {
          Bert.alert( 'Document deleted!', 'danger');
        }
      });
    }
  }

});
