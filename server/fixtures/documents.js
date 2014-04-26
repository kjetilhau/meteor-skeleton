// Fixture data 
if (Documents.find().count() === 0) {
 
  Documents.insert({
    title: "Derp"
  });

  Documents.insert({
    title: "Hurr"
  });

  Documents.insert({
    title: "Durr"
  });

}