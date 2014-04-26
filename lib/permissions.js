// Permissions shared with client and server

// (Thanks @ https://github.com/SachaG/Void)
/* ---------------------------------------------------- +/

Usage:

if (can.editItem(Meteor.user(), myItem)){
  // do something  
}

/+ ---------------------------------------------------- */
can = {
  createItem: function (userId) {
    return true;
  },
  editItem: function (userId, item) {
    return userId === item.userId;
  },
  removeItem: function (userId, item) {
    return userId === item.userId;
  }
}

// Checks if selected user or current user is admin with the Roles package
isAdmin = function (user) {
  user = (typeof user === 'undefined') ? Meteor.user() : user;
  return !!user && !!Roles.userIsInRole(user, ['admin']);
}