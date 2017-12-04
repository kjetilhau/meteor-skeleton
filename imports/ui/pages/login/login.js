import {Template} from 'meteor/templating'
import {Meteor} from 'meteor/meteor'

import {notify} from '/imports/modules/notifier'


import './login.html'
import './login.scss'


Template.login.events({

  'submit form': function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;

    Meteor.loginWithPassword(email, password, function (err) {
      if (err) {
        console.log('Handle errors here: ', err);
        notify(err.reason, 'info')
      } else if (!!Meteor.userId()) {
        FlowRouter.go('documentsIndex')
      }
    })
  }

});
