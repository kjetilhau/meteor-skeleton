import { Meteor } from "meteor/meteor"
import { Roles } from "meteor/alanning:roles"

// ***************************************************************
// Permissions
// ***************************************************************

// If the user owns the item, give permission. Might want to edit this as needed.
export const canEditItem = (userId, item) => {
  return userId === item.userId
}

// If the user owns the item, give permission. Might want to edit this as needed.
export const canRemoveItem = (userId, item) => {
  return userId === item.userId
}

// Checks whether selected user or current user is admin (with the Roles package)
export const isAdmin = user => {
  user = typeof user === "undefined" ? Meteor.user() : user
  return !!user && !!Roles.userIsInRole(user, ["admin"])
}
