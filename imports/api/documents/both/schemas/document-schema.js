import SimpleSchema from "simpl-schema"

// ***************************************************************
// Document schema
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
    autoValue: function() {
      if (this.isInsert) {
        return new Date()
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date()
      }
    }
  }
})

export default DocumentSchema
