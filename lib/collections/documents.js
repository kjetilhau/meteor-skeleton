// A sample collection with Collection2 and SimpleSchema
Documents = new Meteor.Collection('documents', {
  schema: {
    title: {
      type: String,
      label: "Title",
      max: 120,
      optional: false
    },
    createdAt: {
      type: Date,
      optional: true,
      denyUpdate: true,
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        }
      }
    },
    updatedAt: {
      type: Date,
      optional: true,
      denyInsert: true,
      autoValue: function() {
        if (this.isUpdate) {
          return new Date();
        }
      }
    }
  }
});

// Custom validation messages with SimpleSchema
Documents.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: "[label] failed regular expression validation"
});

// Allow and deny rules
Documents.allow({
  insert: function (userId, doc) {
    // Free-for-all!
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // Free-for-all!
    return true;
  },
  remove: function (userId, doc) {
    // Free-for-all!
    return true;
  }
});

// Meteor methods related to collection
Meteor.methods({
  someMethod: function(arg1, arg2) {
    return "some return value";
  },
});
