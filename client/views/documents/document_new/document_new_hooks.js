// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Logs a simple message to the console and re-routes if successful
AutoForm.addHooks(['documentNewForm'], {
  after: {
    "method": function(error, result) {
      if (error) {
        console.log("Insert Error:", error.reason);
      } else {
        console.log("Document inserted: ", result);
        FlowRouter.go('documentsIndex');
      }
    }
  }
});