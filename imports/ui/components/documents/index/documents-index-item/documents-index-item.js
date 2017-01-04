import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './documents-index-item.html';
import { deleteDocument } from '/imports/api/documents/both/document-methods.js';

Template.documentsIndexItem.onCreated(function () {
  this.getDocumentId = () => Template.instance().data.document._id;
});

Template.documentsIndexItem.onRendered(function () {
});

Template.documentsIndexItem.onDestroyed(function () {
});

Template.documentsIndexItem.helpers({
});

Template.documentsIndexItem.events({
  'click .delete-document'(event, instance) {
    event.preventDefault();

    if (confirm("Are you sure?")) {
      let documentId = Template.instance().getDocumentId();

      deleteDocument.call({
        documentId: documentId
      }, (error, result) => {
        if (error) {
          console.log(error.error)
        } else {
          Bert.alert('Document deleted!', 'danger');
        }
      });
    }
  }
});
