// ***************************************************************
// ON CLIENT STARTUP
// ***************************************************************

Meteor.startup( () => {

  // Set notification defaults
  Bert.defaults = {
    hideDelay: 3500,
    // Accepts: a number in milliseconds.
    style: 'growl-bottom-right',
    // Accepts: fixed-top, fixed-bottom, growl-top-left,   growl-top-right,
    // growl-bottom-left, growl-bottom-right.
    type: 'info'
    // Accepts: default, success, info, warning, danger.
  };

});
