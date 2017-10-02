import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"

import "/imports/ui/components/documents/index/documents-index.js"
import "/imports/ui/components/documents/new/document-new.js"
import "/imports/ui/components/documents/show/document-show.js"
import "/imports/ui/components/documents/edit/document-edit.js"

// ***************************************************************
// Document routes
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
FlowRouter.route("/documents", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentsIndex",
      footer: "footer"
    })
  },
  name: "documentsIndex"
})

// DOCUMENT NEW
// -------------------------------------------------------
FlowRouter.route("/documents/new", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentNew",
      footer: "footer"
    })
  },
  name: "documentNew"
})

// DOCUMENT SHOW
// -------------------------------------------------------
FlowRouter.route("/documents/:documentId", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentShow",
      footer: "footer"
    })
  },
  name: "documentShow"
})

// DOCUMENT EDIT
// -------------------------------------------------------
FlowRouter.route("/documents/:documentId/edit", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "documentEdit",
      footer: "footer"
    })
  },
  name: "documentEdit"
})
