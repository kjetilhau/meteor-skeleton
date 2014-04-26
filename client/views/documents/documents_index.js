Template.documentsIndex.rendered = function() {
};

Template.documentsIndex.helpers({
  sayHello: function () {
    return "Heisann!";
  }
});

Template.documentsIndex.events ({
  'click .something': function(e) {
    e.preventDefault();
    var item = this;

    // Do something
  }
});