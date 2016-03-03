(function() {
  var posters = $('.poster-teasers');
  var display = $('.poster-display');
  var inner = display.find('.poster-display-inner');
  var body = $('body');

  posters.find('.image-link').on('click', function(e) {
    var id = $(this).data('id');
    var url = '/posters/' + id;
    e.preventDefault();
    body.addClass('poster-active');

    $.ajax(url, function() {
      id: this.data('id');
    }).done(function(res) {
      $('.poster-loading').fadeOut();
      var poster = $('<img>').attr({src: res.image.url})
      inner.empty().append(poster);
      display.on('click', function() {
        inner.empty();
        body.removeClass('poster-active');
      });
    });
  });

})();