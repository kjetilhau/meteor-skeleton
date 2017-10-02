import { Meteor } from "meteor/meteor"
import { Documents } from "/imports/api/documents/both/document-collection.js"

// ***************************************************************
// Fixtures (generate dummy data for the Documents collection)
// ***************************************************************

Meteor.startup(() => {
  if (Documents.find().count() === 0) {
    Documents.insert({
      title: "Derp",
      content: "Lorem ipsum, herp derp durr."
    })

    Documents.insert({
      title: "Hurr",
      content: "Lorem ipsum, herp derp durr."
    })

    Documents.insert({
      title: "Durr",
      content: "Lorem ipsum, herp derp durr."
    })
  }
})
