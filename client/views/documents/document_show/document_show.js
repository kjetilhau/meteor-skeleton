Template.documentShow.onCreated(function() {
  this.getDocumentId = () => FlowRouter.getParam('documentId');

  this.autorun(() => {
    this.subscribe('document', this.getDocumentId());
  });
});

Template.documentShow.onRendered(function() {
});

Template.documentShow.onDestroyed(function() {
});

Template.documentShow.helpers({
  document() {
    let document = Documents.findOne({_id: Template.instance().getDocumentId()}) || {};
    return document;
  }
});

Template.documentShow.events ({
});
