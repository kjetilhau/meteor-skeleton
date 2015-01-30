// ***************************************************************
// ROUTER HOOKS/FILTERS
// ***************************************************************

Iron.Router.hooks.aHook = function () {
  // Do something
  this.next();
};

// Runs the filter before a route is run. (Remove if not needed)
Router.onBeforeAction('aHook');
