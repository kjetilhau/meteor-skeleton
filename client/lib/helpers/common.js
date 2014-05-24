// Common helpers

// Style link as active if it is the current path
// Usage: <li class="{{active 'frontpage'}}"><a href="{{pathFor 'frontpage'}}">Home</a></li>
UI.registerHelper('active', function(path) {
  var route = Router.routes[path].path()
  if (Router.current().path === route) {
    return 'active';
  }
});

// Very basic pluralization
UI.registerHelper('pluralize', function(count, word) {
  if (count === 1) {
    return '1 ' + word;
  } else {
    return count + ' ' + word + 's';
  }
});

// Outputs e.g. 12 days ago or 2 hours ago with Moment
UI.registerHelper('showTimeago', function(date){
  if (!date) {
    return ("");
  }
  else {
    return moment(date).fromNow();
  }
});

// Outputs e.g. Jan, 2013
UI.registerHelper('showMonthYear', function(date){
  if (!date) {
    return ("");
  }
  else {
    var monthYear = moment(date).format("MMM, YYYY");
    return (monthYear);
  }
});

// Outputs e.g. 12th Jan, 2013
UI.registerHelper('showDayMonthYear', function(date){
  if (!date) {
    return ("");
  }
  else {
    var dayMonthYear = moment(date).format("Do MMM, YYYY");
    return (dayMonthYear);
  }
});

// Get profile image or placeholder image
UI.registerHelper('getProfileImage', function(image){
  var imagePlaceholder = "/img/profile_placeholder.png";
  if (!image || image === "") {
    return imagePlaceholder;
  }
  else {
    return image;
  }
});

// Translates those bytes to something more convenient
UI.registerHelper('bytesToSize', function(bytes){
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
