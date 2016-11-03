import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';

import { Documents } from '/imports/api/documents/both/documents.js';

import './document-show.html';

Template.documentShow.onCreated(function() {
  this.getDocumentId = () => FlowRouter.getParam('documentId');

  this.autorun(() => {
    this.subscribe('documents.single', this.getDocumentId());
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
