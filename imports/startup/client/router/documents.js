// ***************************************************************
// Document routes
// ***************************************************************

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../ui/components/documents/documents-index/documents-index.js';
import '../../../ui/components/documents/document-new/document-new.js';
import '../../../ui/components/documents/document-show/document-show.js';
import '../../../ui/components/documents/document-edit/document-edit.js';

// DOCUMENTS INDEX
// -------------------------------------------------------
FlowRouter.route('/documents', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "documentsIndex", footer: "footer"});
  },
  name: "documentsIndex"
});

// DOCUMENT NEW
// -------------------------------------------------------
FlowRouter.route('/documents/new', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "documentNew", footer: "footer"});
  },
  name: "documentNew"
});

// DOCUMENT SHOW
// -------------------------------------------------------
FlowRouter.route('/documents/:documentId', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "documentShow", footer: "footer"});
  },
  name: "documentShow"
});

// DOCUMENT EDIT
// -------------------------------------------------------
FlowRouter.route('/documents/:documentId/edit', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "documentEdit", footer: "footer"});
  },
  name: "documentEdit"
});
