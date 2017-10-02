import { Meteor } from "meteor/meteor"
import SimpleSchema from "simpl-schema"

import { Documents } from "../both/document-collection.js"

// ***************************************************************
// PUBLICATIONS (For the documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish("documents.all", function documentsAll() {
  return Documents.find()
})

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish("documents.single", function documentsSingle(id) {
  new SimpleSchema({
    id: { type: String }
  }).validate({ id })

  return Documents.find(id)
})
