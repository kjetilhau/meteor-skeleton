// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Shows a simple message and re-routes if successful
AutoForm.addHooks(['documentNewForm'], {
  after: {
    "method": (error, result) => {
      if (error) {
        console.log("Insert Error:", error.reason);
      } else {
        FlowRouter.go('documentsIndex');
        Bert.alert('Document inserted!', 'success');
      }
    }
  }
});
