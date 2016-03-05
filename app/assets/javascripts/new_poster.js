(function() {
  var posterForm = $('.new_poster');

  posterForm.on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData();
    var title = posterForm.find('#poster_title');
    var artist = posterForm.find('#poster_artist');
    var image = posterForm.find('#poster_image');

    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('image', image[0].files[0]);

    $.ajax({
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      url: '/posters',
      date: formData,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST'
    }).done(function() {
      console.log('FUCK YEAH IT WORKED')
    });
  });

})();