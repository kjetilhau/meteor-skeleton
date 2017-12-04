import {Template} from 'meteor/templating'
import {Meteor} from 'meteor/meteor'
import {FlowRouter} from 'meteor/kadira:flow-router'

import {notify} from '/imports/modules/notifier'

import './registration.html'


Template.registration.events({
  'submit form': function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;
    const username = target.username.value;
    const password = target.password.value;

    Accounts.createUser({username: username, email: email, password: password}, function (err) {
      if (err) {
        console.log('Handle errors here: ', err);
        notify(err.reason, 'info')
      } else if (!!Meteor.userId()) {
        FlowRouter.go('documentsIndex')
      }
    })
  }

});
