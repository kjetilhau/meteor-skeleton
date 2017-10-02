import { Meteor } from "meteor/meteor"
import SimpleSchema from "simpl-schema"
import { ValidatedMethod } from "meteor/mdg:validated-method"

import { Documents } from "./document-collection.js"
import CreateDocumentSchema from "./schemas/create-document-schema.js"
import UpdateDocumentSchema from "./schemas/update-document-schema.js"

// ***************************************************************
// METHODS (related to the documents collection)
// ***************************************************************

export const createDocument = new ValidatedMethod({
  name: "documents.create",
  validate: CreateDocumentSchema.validator(),
  run(document) {
    // Additional data verification

    return Documents.insert(
      {
        title: document.title,
        content: document.content
      },
      function(error, result) {
        if (error) {
          throw new Meteor.Error(500, "Server error")
        }
      }
    )
  }
})

export const updateDocument = new ValidatedMethod({
  name: "documents.update",
  validate: UpdateDocumentSchema.validator(),
  run(document) {
    // Additional data verification

    return Documents.update(
      document._id,
      {
        $set: {
          title: document.title,
          content: document.content
        }
      },
      function(error, result) {
        if (error) {
          throw new Meteor.Error(500, "Server error")
        }
      }
    )
  }
})

export const deleteDocument = new ValidatedMethod({
  name: "documents.delete",
  validate: new SimpleSchema({
    documentId: { type: String }
  }).validator(),
  run({ documentId }) {
    // Additional data verification

    return Documents.remove(documentId, function(error, result) {
      if (error) {
        throw new Meteor.Error(500, "Server error")
      }
    })
  }
})
