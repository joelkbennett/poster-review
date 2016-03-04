(function() {
  
  $('.delete-user').on('ajax:success', function() {
    console.log('success!');
    $(this).parent().parent().fadeOut();
  });

})();