// ***************************************************************
// PERMISSIONS (shared with client and server)
// ***************************************************************

// If the user owns the item, give permission
canEditItem = (userId, item) => {
  return userId === item.userId;
};

// If the user owns the item, give permission
canRemoveItem = (userId, item) => {
  return userId === item.userId;
};

// Checks whether selected user or current user is admin (with the Roles package)
isAdmin = (user) => {
  user = (typeof user === 'undefined') ? Meteor.user() : user;
  return !!user && !!Roles.userIsInRole(user, ['admin']);
};
