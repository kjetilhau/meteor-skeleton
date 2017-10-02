import { Template } from "meteor/templating"
import { FlowRouter } from "meteor/kadira:flow-router"

import { Documents } from "/imports/api/documents/both/document-collection.js"

import "./document-show.html"

Template.documentShow.onCreated(function() {
  this.getDocumentId = () => FlowRouter.getParam("documentId")

  this.autorun(() => {
    this.subscribe("documents.single", this.getDocumentId())
  })
})

Template.documentShow.onRendered(function() {})

Template.documentShow.onDestroyed(function() {})

Template.documentShow.helpers({
  document() {
    return Documents.findOne({ _id: Template.instance().getDocumentId() }) || {}
  }
})

Template.documentShow.events({})
