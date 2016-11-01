// ***************************************************************
// COMMON HELPERS (client-side only)
// ***************************************************************

import moment from "moment";

// Cheap pluralization
Template.registerHelper('pluralize', (count, word) => {
  return count === 1 ? '1 ' + word : count + ' ' + word + 's';
});

// Outputs e.g. 12 days ago or 2 hours ago
Template.registerHelper('showTimeAgo', (date) => {
  return !date ? "" : moment(date).fromNow();
});

// Outputs e.g. Jan, 2013
Template.registerHelper('showMonthYear', (date) => {
  return !date ? "" : moment(date).format("MMM, YYYY");
});

// Outputs e.g. 12th Jan, 2013
Template.registerHelper('showDayMonthYear', (date) => {
  return !date ? "" : moment(date).format("Do MMM, YYYY")
});

// Outputs August 30th 2014, 5:33:46 pm
Template.registerHelper('showPrettyTimestamp', (date) => {
  return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
});

// Get profile image or placeholder image
Template.registerHelper('getProfileImage', (image) => {
  let imagePlaceholder = "/img/profile_placeholder.png";
  if (!image || image === "") {
    return imagePlaceholder;
  }
  else {
    return image;
  }
});

// Translates those bytes to something more readable (e.g. 1.2 MB)
Template.registerHelper('bytesToSize', (bytes) => {
  if (!bytes) {
    return ("");
  }
  else {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  }
});
