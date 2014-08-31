// Autoform hooks

AutoForm.addHooks(['documentForm'], {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Insert Error:", error);
      } else {
        console.log("Insert Result:", result);
        Router.go('documentsIndex')
      }
    },
    update: function(error) {
      if (error) {
        console.log("Update Error:", error);
      } else {
        console.log("Updated!");
        Router.go('documentsIndex')
      }
    }
  }
});
