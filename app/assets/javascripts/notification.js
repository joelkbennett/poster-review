(function() {
  var notifications = $('.notifications');

  setTimeout(function() {
    notifications.fadeOut();
  }, 2500);

  // $.each(notifications, function(el) {
  //   $(el).on('click', function() {
  //     console.log('fired')
  //     this.fadeOut();
  //   });
  // });
})();