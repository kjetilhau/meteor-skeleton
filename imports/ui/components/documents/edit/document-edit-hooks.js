import { AutoForm } from "meteor/aldeed:autoform"
import { FlowRouter } from "meteor/kadira:flow-router"

import { notify } from "/imports/modules/notifier"

// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Shows a simple message and re-routes if successful
AutoForm.addHooks(["documentEditForm"], {
  after: {
    method: (error, result) => {
      if (error) {
        console.log("Update Error:", error.reason)
      } else {
        FlowRouter.go("documentsIndex")
        notify("Document updated!", "success")
      }
    }
  }
})
