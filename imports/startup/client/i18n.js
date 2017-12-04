import { TAPi18n  } from 'meteor/tap:i18n'

TAPi18n.setLanguage('en')
  .done(function () {
  })
  .fail(function (error_message) {
    // Handle the situation
    console.log(error_message);
  });
