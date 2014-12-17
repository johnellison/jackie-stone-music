/* jshint devel:true */
var songs = [
  {
    "title": "1. Minefield",
    "mp3": "/songs/01 Minefield.mp3",
    "wav": "/songs/01 Minefield.wav"
  },
  {
    "title": "2. Silence of Twilight",
    "mp3": "/songs/02 Silence of Twilight.mp3",
    "wav": "/songs/02 Silence of Twilight.wav"
  },
  {
    "title": "3. Rocketeer",
    "mp3": "/songs/03 Rocketeer.mp3",
    "wav": "/songs/03 Rocketeer.wav"
  },
  {
    "title": "4. Zodiacal Light",
    "mp3": "/songs/04 Zodiacal Light.mp3",
    "wav": "/songs/04 Zodiacal Light.wav"
  },
  {
    "title": "5. Touch",
    "mp3": "/songs/05 Touch.mp3",
    "wav": "/songs/05 Touch.wav"
  }
];

(function () {
  'use strict';

  jQuery(document).ready(function($) {

    // init foundation 
    $(document).foundation({
      topbar: {
        scrolltop: false
      }
    });
    // scrollTo #hash animations
    (function smoothScroll(){
      $( 'a[href^="#"]' ).on( 'click', function(e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);
        
        $( 'html, body' ).stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
            if ($target.selector == '#cta') {
              $('#download-the-wildfire').focus();
            }
        });
      });
    }());  

    // load songs at scrollToBottom
    $("#jquery_jplayer_audio_1").waypoint(function(direction) {
      createSongs();
    },
    {
      triggerOnce: true,
      offset: 'bottom-in-view'
    });

    function createSongs() {
      songs.forEach(function(song, index) {
          var songNumber = index + 1;
          $( "#jquery_jplayer_audio_" + songNumber).jPlayer({
          ready: function(event) {
            $(this).jPlayer("setMedia", {
              title: song.title,
              mp3: song.mp3,
              wav: song.wav
            });
          },
          play: function() { // Avoid multiple jPlayers playing together.
            $(this).jPlayer("pauseOthers");
          },
          timeFormat: {
            padMin: false
          },
          swfPath: "js",
          supplied: "wav, mp3",
          cssSelectorAncestor: "#jp_container_audio_" + songNumber,
          smoothPlayBar: false,
          remainingDuration: true,
          keyEnabled: true,
          keyBindings: {
            // Disable some of the default key controls
            muted: null,
            volumeUp: null,
            volumeDown: null
          },
          wmode: "window",
          preload: "auto"
        });
      });
    }

    (function playNextSong() {
      songs.slice(0, -1).forEach(function(song, index) {
        var songNumber = index + 1;
        $("#jquery_jplayer_audio_" + songNumber)
          .bind($.jPlayer.event.ended, function(event) {
            $("#jquery_jplayer_audio_" + (songNumber + 1)).jPlayer("play");
          });
      });
    }());

  }(jQuery));
}());