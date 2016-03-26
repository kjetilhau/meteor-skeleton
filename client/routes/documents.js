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
