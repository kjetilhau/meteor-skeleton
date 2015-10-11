Template.documentShow.onCreated(function() {
  var self = this;
  self.autorun(function () {
    var documentId = FlowRouter.getParam('documentId');
    self.subscribe("document", documentId);
  });
});

Template.documentShow.onRendered(function() {
});

Template.documentShow.onDestroyed(function() {
});

Template.documentShow.helpers({
  document: function () {
    var documentId = FlowRouter.getParam('documentId');
    var document = Documents.findOne({_id: documentId}) || {};
    return document;
  }
});

Template.documentShow.events ({
});
