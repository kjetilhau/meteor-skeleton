import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import { deleteDocument } from '/imports/api/documents/both/document-methods.js';

import './documents-index-item.html';

Template.documentsIndexItem.onCreated(function () {
  // Example for validating the data context (if needed)
  this.autorun(() => {
    new SimpleSchema({
      _id: { type: String },
      title: { type: String },
      content: { type: String, optional: true },
      createdAt: { type: Date },
      updatedAt: { type: Date, optional: true },
    }).validate(Template.currentData().document);
  });

  this.getDocumentId = () => Template.instance().data.document._id;
});

Template.documentsIndexItem.onRendered(function () {
});

Template.documentsIndexItem.onDestroyed(function () {
});

Template.documentsIndexItem.helpers({
});

Template.documentsIndexItem.events({
  'click .js-delete-document'(event, instance) {
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
