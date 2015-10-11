// ***************************************************************
// STARTUP (Will run as soon as the server process is finished starting)
// ***************************************************************

Meteor.startup(function () {
  Fixtures.Documents.Create();
});
