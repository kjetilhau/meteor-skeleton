// ***************************************************************
// FIXTURES (generate dummy data for the Documents collection)
// ***************************************************************

import { Meteor } from 'meteor/meteor';
import { Documents } from '../../api/documents/documents.js';

Meteor.startup(() => {
  if (Documents.find().count() === 0) {
    Documents.insert({
      title: "Derp",
      content: "Lorem ipsum, herp derp durr."
    });

    Documents.insert({
      title: "Hurr",
      content: "Lorem ipsum, herp derp durr."
    });

    Documents.insert({
      title: "Durr",
      content: "Lorem ipsum, herp derp durr."
    });
  }
});
