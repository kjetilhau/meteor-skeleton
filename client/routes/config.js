// ***************************************************************
// FLOW ROUTER CONFIGURATION
// ***************************************************************

// Not found route
FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  subscriptions: function() {},
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "error404", footer: "footer"});
  }
};
