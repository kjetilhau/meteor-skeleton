import { Mongo } from "meteor/mongo"

import DocumentSchema from "./schemas/document-schema"

// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

export const Documents = new Mongo.Collection("documents")

// We use explicit methods, so deny everything
Documents.allow({
  insert() {
    return false
  },
  update() {
    return false
  },
  remove() {
    return false
  }
})

Documents.deny({
  insert() {
    return true
  },
  update() {
    return true
  },
  remove() {
    return true
  }
})

// Must remember to attach the schema to the collection
Documents.attachSchema(DocumentSchema)
