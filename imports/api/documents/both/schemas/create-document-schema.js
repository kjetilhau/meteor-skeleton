import SimpleSchema from "simpl-schema"

// ***************************************************************
// Create document schema
// ***************************************************************

const CreateDocumentSchema = new SimpleSchema({
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

export default CreateDocumentSchema
