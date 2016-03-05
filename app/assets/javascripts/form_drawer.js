(function() {

  // form slider

  var body = $('body');
  var addPosterLink = $('.add-poster');
  var loginLink = $('.login');

  addPosterLink.on('click', function() {
    body.removeClass('nav-active');
    body.addClass('form-active-poster')
  });

  loginLink.on('click', function() {
    body.removeClass('nav-active');
    body.addClass('form-active-login');
  });

})();