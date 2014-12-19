
(function () {
  'use strict';
  jQuery(document).ready(function($) {
      // share
      $(".m-share-image").on('click', function(){
        ga('send', {
          'hitType' : 'event',
          'eventCategory' : 'Share',
          'eventValue' : 2
        });
      });

      // submit email
      $("#submit-email").on('click', function(){
        ga('send', {
          'hitType' : 'event',
          'eventCategory' : 'Submit Email',
          'eventLabel' : 'Submit',
          'eventValue' : 3
        });
      });

      // contact button
      $("[data-event='contact']").on('click', function(){
        ga('send', {
          'hitType' : 'event',
          'eventCategory' : 'Contact',
          'eventValue' : 100
        });
      });

      // play song
      $('.m-song-wrapper').on($.jPlayer.event.play, function(e) {
       // var title = $(e.target).children('audio').attr('title');
        ga('send', {
          'hitType' : 'event',
          'eventCategory' : 'Play'
        });
      });

  }(jQuery));
}());



