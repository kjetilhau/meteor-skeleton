import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import { Documents } from '/imports/api/documents/both/document-collection.js';
import CreateDocumentSchema from '/imports/api/documents/both/schemas/create-document-schema.js';

import './document-new.html';
import './document-new-hooks.js';

Template.documentNew.onCreated(function () {
});

Template.documentNew.onRendered(function () {
});

Template.documentNew.onDestroyed(function () {
});

Template.documentNew.helpers({
  createDocumentSchema: function () {
    return CreateDocumentSchema;
  },
});

Template.documentNew.events({
});
