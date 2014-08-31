// Iron-router filters / hooks that will run on certain routes

var filters = {

  resetDocumentForm: function() {
    AutoForm.resetForm('documentForm')
  }

}

Router.onStop(filters.resetDocumentForm, {only: ['documentNew', 'documentEdit']});
