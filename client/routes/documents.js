// ***************************************************************
// ROUTES (Documents)
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
        return Documents.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // DOCUMENT NEW
  // -------------------------------------------------------
  this.route('documentNew', {
    template: 'documentNew',
    path: '/documents/new'
  });

  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('documentShow', {
    template: 'documentShow',
    path: '/documents/:_id',
    waitOn: function () {
      return Meteor.subscribe('document', this.params._id);
    },
    data: function () {
      return Documents.findOne(this.params._id);
    }
  });

  // DOCUMENT EDIT
  // -------------------------------------------------------
  this.route('documentEdit', {
    template: 'documentEdit',
    path: '/documents/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('document', this.params._id);
    },
    data: function () {
      return Documents.findOne(this.params._id);
    }
  });

});
