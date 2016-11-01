Template.documentEdit.onCreated(function() {
  this.getDocumentId = () => FlowRouter.getParam('documentId');

  this.autorun(() => {
    this.subscribe('document', this.getDocumentId());
  });
});

Template.documentEdit.onRendered(function() {
});

Template.documentEdit.onDestroyed(function() {
});

Template.documentEdit.helpers({
  document() {
    let document = Documents.findOne({_id: Template.instance().getDocumentId()}) || {};
    return document;
  }
});

Template.documentEdit.events ({
});
