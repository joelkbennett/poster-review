(function() {

  var modalTrig = $('.modal-trigger');
  var modalQuit = $('.modal-quit');
  var body = $('body');

  modalTrig.on('click', function() {
    body.removeClass('nav-active').addClass('modal-active');
  });

  modalQuit.on('click', function() {
    body.removeClass('modal-active');
  });

})();