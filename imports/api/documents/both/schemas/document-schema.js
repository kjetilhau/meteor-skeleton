import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// ***************************************************************
// DOCUMENT Schema
// ***************************************************************

const DocumentSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 120,
    optional: false
  },
  content: {
    type: String,
    label: "Content",
    max: 1000,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true,
    denyUpdate: true,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function () {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

// Custom validation messages with SimpleSchema. Remove if not needed
DocumentSchema.messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or after [min]",
  maxDate: "[label] cannot be after [max]",
  badDate: "[label] is not a valid date",
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
  regEx: [
    { msg: "[label] failed regular expression validation" },
    { exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address" },
    { exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address" },
    { exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain" },
    { exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain" },
    { exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address" },
    { exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address" },
    { exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address" },
    { exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL" },
    { exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID" }
  ],
  keyNotInSchema: "[key] is not allowed by the schema"
});

export default DocumentSchema;
