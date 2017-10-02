import { Template } from "meteor/templating"

import CreateDocumentSchema from "/imports/api/documents/both/schemas/create-document-schema.js"

import "./document-new.html"
import "./document-new-hooks.js"

Template.documentNew.onCreated(function() {})

Template.documentNew.onRendered(function() {})

Template.documentNew.onDestroyed(function() {})

Template.documentNew.helpers({
  createDocumentSchema: function() {
    return CreateDocumentSchema
  }
})

Template.documentNew.events({})
