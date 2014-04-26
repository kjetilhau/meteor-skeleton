// ***************************************************************
// STATIC PAGES
// ***************************************************************

Router.map(function() {
  
  // FRONTPAGE
  // -------------------------------------------------------
  this.route('frontpage', {
    path: '/',
    template: 'frontpage',
    progress: {
      enabled: false
    }
  });
  
}); 