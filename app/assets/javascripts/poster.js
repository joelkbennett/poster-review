(function() {
  var posters = $('.poster-teasers');
  var display = $('.poster-display');
  var inner = display.find('.poster-display-inner');
  var body = $('body');

  function bindPosterClick () {
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
  }

  bindPosterClick();

  // search

  var teasers = $('.poster-teaser');
  var form = $('.site-search-form');

  form.on('ajax:success', function(e, res) {
    teasers.empty();
    res.forEach(function(data) {
      teasers.append(createTeaser(data));
    });
    bindPosterClick();
  });

  function createTeaser(data) {
    wrap = $('<article>').addClass('poster-teaser');
    image = $('<img>').attr('src', data.image.url)
    link = $('<a>').addClass('image-link')
                   .attr('href', '/posters/' + data.id)
                   .data('id', data.id)
                   .append(image);
    title = $('<h1>').addClass('teaser-title').text(data.title)
    subtitle = $('<h2>').addClass('teaser-subtitle').text(data.artist)
    wrap.append(link)
    wrap.append(title);
    wrap.append(subtitle);
    return wrap;
  }

})();