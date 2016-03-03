(function() {

  var posters = $('.poster-teasers');
  var display = $('.poster-display');
  posters.find('.image-link').on('click', function(e) {
    var id = $(this).data('id');
    var url = '/posters/' + id;
    e.preventDefault();
    display.addClass('poster-active');

    $.ajax(url, function() {
      id: this.data('id');
    }).done(function(res) {
      $('.poster-loading').fadeOut();
      var poster = $('<img>').attr({src: res.image.url})
      display.empty().append(poster);
      poster.scroll();
      poster.on('click', function() {
        display.removeClass('poster-active');
      });
    });
  });

})();