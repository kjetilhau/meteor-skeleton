import { Template } from "meteor/templating"

// ***************************************************************
// COMMON HELPERS (client-side only)
// ***************************************************************

import * as helpers from "/imports/modules/helpers.js"

// Cheap pluralization
Template.registerHelper("pluralize", (count, word) => {
  return helpers.pluralize(count, word)
})

// Outputs e.g. 12 days ago or 2 hours ago
Template.registerHelper("showTimeAgo", date => {
  return helpers.showTimeAgo(date)
})

// Outputs e.g. Jan, 2013
Template.registerHelper("showMonthYear", date => {
  return helpers.showMonthYear(date)
})

// Outputs e.g. 12th Jan, 2013
Template.registerHelper("showDayMonthYear", date => {
  return helpers.showDayMonthYear(date)
})

// Outputs August 30th 2014, 5:33:46 pm
Template.registerHelper("showPrettyTimestamp", date => {
  return helpers.showPrettyTimestamp(date)
})

// Get profile image or placeholder image
Template.registerHelper("getProfileImage", image => {
  return helpers.getProfileImage(image)
})

// Translates those bytes to something more readable (e.g. 1.2 MB)
Template.registerHelper("bytesToSize", bytes => {
  return helpers.bytesToSize(bytes)
})
