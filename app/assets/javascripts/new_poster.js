(function() {
  var posterForm = $('.new_poster');
  var body = $('body');
  var teasers = $('.poster-teasers');


  posterForm.on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData();
    var title = posterForm.find('#poster_title')[0].value;
    var artist = posterForm.find('#poster_artist')[0].value;
    var image = posterForm.find('#poster_image')[0].files[0];

    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('image', image, image.name);

    $.ajax({
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      url: '/posters',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST'
    }).done(function(res) {
      body.removeClass().addClass('loading');
      addPoster(res);
      posterForm.clear();
    });
  });

  function addPoster(poster) {
    teaser = $('<article>').addClass('poster-teaser');
    link = $('<a>').attr('href', '/posters/' + poster.id).addClass('image-link').data('id', poster.id);
    image = $('<img>').attr('src', poster.image.url);
    title = $('<a>').attr('href', '/posters/' + poster.id).append($('<h1>').addClass('teaser-title').text(poster.title));
    teasers.append(teaser.append(link.append(image)).append(title));
    body.animate({
      scrollTop: $(document).height()
    }, 500);
  }

})();