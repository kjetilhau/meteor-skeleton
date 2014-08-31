// Permissions shared with client and server

canCreateItem = function (userId) {
  // If the user is logged in, give permission
  return true;
},
canEditItem = function (userId, item) {
  // If the user owns the item, give permission
  return userId === item.userId;
},
canRemoveItem = function (userId, item) {
  // If the user owns the item, give permission
  return userId === item.userId;
}

// Checks whether selected user or current user is admin (with the Roles package)
isAdmin = function (user) {
  user = (typeof user === 'undefined') ? Meteor.user() : user;
  return !!user && !!Roles.userIsInRole(user, ['admin']);
}
