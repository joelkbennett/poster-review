(function() {
  var notifications = $('.notifications');

  setTimeout(function() {
    notifications.fadeOut();
  }, 2000);

  $('.close-icon').on('click', function() {
    $('body').removeClass();
  });
})();