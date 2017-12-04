import { Template } from "meteor/templating"

import './header.html'

Template.header.onCreated(function() {})

Template.header.onRendered(function() {})

Template.header.onDestroyed(function() {})

Template.header.helpers({
  language() {
    return TAPi18n.getLanguage().toLocaleUpperCase()
  }
})


