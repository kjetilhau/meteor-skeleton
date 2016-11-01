// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Logs a simple message to the console and re-routes if successful
AutoForm.addHooks(['documentNewForm'], {
  after: {
    "method": (error, result) => {
      if (error) {
        console.log("Insert Error:", error.reason);
      } else {
        FlowRouter.go('documentsIndex');
        Bert.alert( 'Document inserted!', 'success');
      }
    }
  }
});
