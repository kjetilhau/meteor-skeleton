import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// ***************************************************************
// Route filters & triggers
// ***************************************************************

// Simple redirect unless user is logged in
const mustBeLoggedIn = (context, redirect, stop) => {
  if (!Meteor.userId()) {
    redirect('frontpage');
    Bert.alert('Must be logged in!', 'danger');
  }
}

/*
Uncomment to require the user to be logged in to view og modify documents
Note: This is only handled client-side. Remember to do verification on the server as well
*/

// FlowRouter.triggers.enter([mustBeLoggedIn], {except: ["frontpage", "about"]});
