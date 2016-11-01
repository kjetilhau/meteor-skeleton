import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// // Import to load these templates
// import '../../ui/layouts/app-body.js';
// import '../../ui/pages/root-redirector.js';
 import '../../../ui/components/documents/documents_index/documents_index.js';
// import '../../ui/pages/app-not-found.js';

// ***************************************************************
// ROUTES (Documents)
// ***************************************************************

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
