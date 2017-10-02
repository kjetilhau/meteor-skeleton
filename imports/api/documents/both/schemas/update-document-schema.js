import SimpleSchema from "simpl-schema"

// ***************************************************************
// Update document schema
// ***************************************************************

const UpdateDocumentSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: false
  },
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
  }
})

export default UpdateDocumentSchema
