import { FlowRouter } from "meteor/kadira:flow-router"
import { Meteor } from "meteor/meteor"

import { notify } from "/imports/modules/notifier"

// ***************************************************************
// Route filters & triggers
// ***************************************************************

// Simple redirect unless user is logged in
const mustBeLoggedIn = (context, redirect, stop) => {
  if (!Meteor.userId()) {
    redirect("frontpage")
    notify("Must be logged in!", "error")
  }
}

/*
Uncomment to require the user to be logged in to view og modify documents
Note: This is only handled client-side. Remember to do verification on the server as well
*/

// FlowRouter.triggers.enter([mustBeLoggedIn], { except: ['frontpage', 'about'] })
