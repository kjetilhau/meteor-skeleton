import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';

import { Documents } from '/imports/api/documents/documents.js';

import './document-new.html';
import './document-new-hooks.js';

Template.documentNew.onCreated(function() {
});

Template.documentNew.onRendered(function() {
});

Template.documentNew.onDestroyed(function() {
});

Template.documentNew.helpers({
  documentsCollection() {
    return Documents;
  }
});

Template.documentNew.events ({
});
