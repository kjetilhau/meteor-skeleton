import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"

import "/imports/ui/pages/frontpage/frontpage.js"
import "/imports/ui/pages/about/about.js"

import '/imports/ui/pages/login/login.js'
import '/imports/ui/pages/registration/registration.js'

// ***************************************************************
// Static pages
// ***************************************************************

// FRONTPAGE
// -------------------------------------------------------
FlowRouter.route("/", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "frontpage",
      footer: "footer"
    })
  },
  name: "frontpage"
})

// ABOUT
// -------------------------------------------------------
FlowRouter.route("/about", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "about",
      footer: "footer"
    })
  },
  name: "about"
})


// LOGIN
// -------------------------------------------------------
FlowRouter.route('/login', {
  action: function () {
    BlazeLayout.render('layout', {header: "header", main: 'login', footer: 'footer' })
  },
  name: 'login'
})



// REGISTRATION
// -------------------------------------------------------
FlowRouter.route('/registration', {
  action: function () {
    BlazeLayout.render('layout', {header: "header", main: 'registration', footer: 'footer' })
  },
  name: 'registration'
})

// LOGOUT
// -------------------------------------------------------

FlowRouter.route('/logout', {
  name: 'logout',
  action: function () {
    Meteor.logout();
    FlowRouter.go('/login');
  }
});
