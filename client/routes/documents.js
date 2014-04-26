// ***************************************************************
// DOCUMENTS
// ***************************************************************

Router.map(function() {
  
  // DOCUMENTS INDEX
  // -------------------------------------------------------
  this.route('documentsIndex', {
    template: 'documentsIndex',
    path: '/documents',
    waitOn: function () {
      return Meteor.subscribe('documents');
    },
    data: {
      documents: function () {
        return Documents.find({}, {sort: {title: 1}});
      }
    }
  }); 
  
  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('documentShow', {
    template: 'documentShow',
    path: '/documents/:_id',
    waitOn: function () {
      return Meteor.subscribe('documentShow', this.params._id);
    },
    data: function () { 
      return Documents.findOne(this.params._id); 
    }
  });
  
}); 