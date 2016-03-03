(function() {

  var nav = $('.site-navigation');
  var body = $('body');

  nav.find('.nav-toggle').on('click', function() { 
    console.log('fired');   
    body.toggleClass('nav-active');
  });

})();