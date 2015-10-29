// ***************************************************************
// ROUTER FILTERS & TRIGGERS
// ***************************************************************

function mustBeLoggedIn(context, redirect, stop) {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the front page
    redirect('frontpage');
    console.log("Must be logged in!");
  }
}

// Uncomment to require the user to be logged in...
// FlowRouter.triggers.enter([mustBeLoggedIn], {except: ["frontpage", "about"]});
