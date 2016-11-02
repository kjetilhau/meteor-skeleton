import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';

import { Documents } from '/imports/api/documents/documents.js';

import './documents_index.html';

// Component used in the template
import './_documents_index_item.js';

Template.documentsIndex.onCreated(function() {
  this.subscribe('documents');
});

Template.documentsIndex.onRendered(function() {
});

Template.documentsIndex.onDestroyed(function() {
});

Template.documentsIndex.helpers({
  documents() {
    return Documents.find({}, {sort: {createdAt: -1}});
  }
});

Template.documentsIndex.events ({
});
