import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

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
