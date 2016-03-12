// ***************************************************************
// FIXTURES (generate dummy data for the Documents collection)
// ***************************************************************

Fixtures.Documents = {};

Fixtures.Documents.Create = () => {
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
}