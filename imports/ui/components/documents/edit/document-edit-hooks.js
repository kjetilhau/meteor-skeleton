// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Shows a simple message and re-routes if successful
AutoForm.addHooks(['documentEditForm'], {
  after: {
    "method": (error, result) => {
      if (error) {
        console.log("Update Error:", error.reason);
      } else {
        FlowRouter.go('documentsIndex');
        Bert.alert('Document updated!');
      }
    }
  }
});
