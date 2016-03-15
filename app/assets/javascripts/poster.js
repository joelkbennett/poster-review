(function() {
  var posters = $('.poster-teasers');
  var display = $('.poster-display');
  var inner = display.find('.poster-display-inner');
  var body = $('body');

  function bindPosterClick () {
    posters.find('.image-link').on('click', function(e) {
      var id = $(this).data('id');
      var url = '/posters/' + id;
      var posterTop = Math.round($(this).find('img').offset().top) - 80;

      e.preventDefault();
      body.addClass('poster-active');

      $.ajax(url, function() {
        id: this.data('id');
      }).done(function(res) {
        moveTo(0);
        $('.poster-loading').fadeOut();
        createPoster(res, posterTop);
      });
    });
  }

  function createPoster(res, posterTop) {
    var poster = $('<img>').attr({src: res.image.url});
    var title = $('<div>').append($('<h1>').addClass('poster-title').text(res.title));
    var artist = $('<div>').append($('<p>').text(res.artist));
    inner.empty().append(poster).append(title);
    display.on('click', function() {
      moveTo(posterTop);
      body.removeClass('poster-active');
      inner.empty();
    });
  }

  bindPosterClick();

  // search

  var teasers = $('.poster-teasers');
  var form = $('.site-search-form');

  form.on('ajax:success', function(e, res) {
    teasers.empty();
    for (var i = 0; i < res.length; i++) {
      teasers.append(createTeaser(res[i]));
    }
    bindPosterClick();
  });

  function createTeaser(data) {
    wrap = $('<article>').addClass('poster-teaser');

    image = $('<img>').attr('src', data.image.url)
    
    link = $('<a>').addClass('image-link')
                   .attr('href', '/posters/' + data.id)
                   .data('id', data.id)
                   .append(image);

    title = $('<h1>').addClass('teaser-title').text(data.title);
    subtitle = $('<h2>').addClass('teaser-subtitle').text(data.artist);
    wrap.append(link);
    wrap.append(title);
    wrap.append(subtitle);
    return wrap;
  }

  // 

  function moveTo(position) {
    body.animate({
      scrollTop: position
    }, 500);
  }

})();