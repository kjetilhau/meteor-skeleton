import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Documents } from '/imports/api/documents/documents.js';

import './document-edit.html';
import './document-edit-hooks.js';

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
  documentsCollection() {
    return Documents;
  },
  document() {
    let document = Documents.findOne({_id: Template.instance().getDocumentId()}) || {};
    return document;
  }
});

Template.documentEdit.events ({
});
