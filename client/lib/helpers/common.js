// ***************************************************************
// COMMON HELPERS (client-side only)
// ***************************************************************

// Style link as active if it is the current path
// Usage: <li class="{{active 'frontpage'}}"><a href="{{pathFor 'frontpage'}}">Home</a></li>
UI.registerHelper('active', function(path) {
  var route = Router.routes[path].path()
  if (Iron.Location.get().originalUrl === route) {
    return 'active';
  }
});

// Cheap pluralization
UI.registerHelper('pluralize', function(count, word) {
  return count === 1 ? '1 ' + word : count + ' ' + word + 's';
});

// Outputs e.g. 12 days ago or 2 hours ago
UI.registerHelper('showTimeAgo', function(date) {
  return !date ? "" : moment(date).fromNow();
});

// Outputs e.g. Jan, 2013
UI.registerHelper('showMonthYear', function(date) {
  return !date ? "" : moment(date).format("MMM, YYYY");
});

// Outputs e.g. 12th Jan, 2013
UI.registerHelper('showDayMonthYear', function(date) {
  return !date ? "" : moment(date).format("Do MMM, YYYY")
});

// Outputs August 30th 2014, 5:33:46 pm
UI.registerHelper('showPrettyTimestamp', function(date) {
  return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
});

// Get profile image or placeholder image
UI.registerHelper('getProfileImage', function(image) {
  var imagePlaceholder = "/img/profile_placeholder.png";
  if (!image || image === "") {
    return imagePlaceholder;
  }
  else {
    return image;
  }
});

// Translates those bytes to something more readable (e.g. 1.2 MB)
UI.registerHelper('bytesToSize', function(bytes) {
  if (!bytes) {
    return ("");
  }
  else {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  }
});
