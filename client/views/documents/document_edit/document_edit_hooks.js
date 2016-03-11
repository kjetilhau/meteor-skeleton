// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Logs a simple message to the console and re-routes if successful
AutoForm.addHooks(['documentEditForm'], {
  after: {
    "method-update": function(error, result) {
      if (error) {
        console.log("Update Error:", error.reason);
      } else {
        console.log("Document updated: ", result);
        FlowRouter.go('documentsIndex');
      }
    }
  }
});