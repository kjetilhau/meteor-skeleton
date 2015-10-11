Template.documentEdit.onCreated(function() {
  var self = this;
  self.autorun(function () {
    var documentId = FlowRouter.getParam('documentId');
    self.subscribe("document", documentId);
  });
});

Template.documentEdit.onRendered(function() {
  // Reset form validations
  AutoForm.resetForm('documentForm');
});

Template.documentEdit.onDestroyed(function() {
});

Template.documentEdit.helpers({
  document: function () {
    var documentId = FlowRouter.getParam('documentId');
    var document = Documents.findOne({_id: documentId}) || {};
    return document;
  }
});

Template.documentShow.events ({
});
