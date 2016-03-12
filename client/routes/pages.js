// ***************************************************************
// ROUTES (Static pages)
// ***************************************************************

// FRONTPAGE
// -------------------------------------------------------
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "frontpage", footer: "footer"});
  },
  name: "frontpage"
});

// ABOUT
// -------------------------------------------------------
FlowRouter.route('/about', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "about", footer: "footer"});
  },
  name: "about"
});