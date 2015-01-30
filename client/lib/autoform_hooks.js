// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Logs a simple message to the console and re-routes if successful
AutoForm.addHooks(['documentForm'], {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Insert Error:", error);
      } else {
        console.log("Document inserted:", result);
        Router.go('documentsIndex')
      }
    },
    update: function(error) {
      if (error) {
        console.log("Update Error:", error);
      } else {
        console.log("Document updated");
        Router.go('documentsIndex')
      }
    }
  }
});
