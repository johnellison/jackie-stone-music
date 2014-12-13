/* jshint devel:true */
(function () {
  'use strict';
  jQuery(document).ready(function($) {

    // when user clicks 'download music' they are brought to cta in page and focused on input element
    // (function goToDownload() {
    //   $( '#download-music' ).click(function (e) {
    //     e.preventDefault();

    //     $("#download-the-wildfire")
    //       .removeAttr('value')
    //       .focus();
    //   });
    // }());

    // scrollTo #hash animations
    (function smoothScroll(){
      $( 'a[href^="#"]' ).on( 'click', function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);
        $( 'html, body' ).stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
      });
    }());     

      (function playNextSong() {

        var $song1 = $("#jquery_jplayer_audio_1"),
            $song2 = $("#jquery_jplayer_audio_2"),
            $song3 = $("#jquery_jplayer_audio_3"),
            $song4 = $("#jquery_jplayer_audio_4"),
            $song5 = $("#jquery_jplayer_audio_5");

        $song1.bind($.jPlayer.event.ended, function(event) { 
          $song2.jPlayer("play"); 
        });
        $song2.bind($.jPlayer.event.ended, function(event) { 
          $song3.jPlayer("play"); 
        });
        $song3.bind($.jPlayer.event.ended, function(event) { 
          $song4.jPlayer("play"); 
        });
        $song4.bind($.jPlayer.event.ended, function(event) { 
          $song5.jPlayer("play"); 
        });
        return false;
       }());

  }());
}());

$("#jquery_jplayer_audio_1").waypoint(function(direction) {
  createSongs();
},
{
  triggerOnce: true,
  offset: 'bottom-in-view'
});

//init jPlayer 1
function createSongs() {
  $( "#jquery_jplayer_audio_1" ).jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "1. Minefield",
        wav: "/songs/01 Minefield.wav"
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "wav",
    cssSelectorAncestor: "#jp_container_audio_1",
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

  //init jPlayer 2
  $("#jquery_jplayer_audio_2").jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "2. Silence of Twilight",
        wav: "/songs/02 Silence Of Twilight.wav"
        /* TODO: ADD oga: "" */
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "wav",
    cssSelectorAncestor: "#jp_container_audio_2",
    smoothPlayBar: true,
    remainingDuration: true,
    keyEnabled: true,
    keyBindings: {
      // Disable some of the default key controls
      muted: null,
      volumeUp: null,
      volumeDown: null
    },
    wmode: "window"
  });

  //init jPlayer 3
  $("#jquery_jplayer_audio_3").jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "3. Rocketeer",
        wav: "/songs/03 Rocketeer.wav"
        /* TODO: ADD oga: "" */
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "wav",
    cssSelectorAncestor: "#jp_container_audio_3",
    smoothPlayBar: true,
    remainingDuration: true,
    keyEnabled: true,
    keyBindings: {
      // Disable some of the default key controls
      muted: null,
      volumeUp: null,
      volumeDown: null
    },
    wmode: "window"
  });

  //init jPlayer 4
  $("#jquery_jplayer_audio_4").jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "4. Zodiacal Light",
        wav: "/songs/04 Zodiacal Light.wav"
        /* TODO: ADD oga: "" */
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "wav",
    cssSelectorAncestor: "#jp_container_audio_4",
    smoothPlayBar: true,
    remainingDuration: true,
    keyEnabled: true,
    keyBindings: {
      // Disable some of the default key controls
      muted: null,
      volumeUp: null,
      volumeDown: null
    },
    wmode: "window"
  });

  //init jPlayer 4
  $("#jquery_jplayer_audio_5").jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "5. Touch",
        wav: "/songs/05 Touch.wav"
        /* TODO: ADD oga: "" */
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "wav",
    cssSelectorAncestor: "#jp_container_audio_5",
    smoothPlayBar: true,
    remainingDuration: true,
    keyEnabled: true,
    keyBindings: {
      // Disable some of the default key controls
      muted: null,
      volumeUp: null,
      volumeDown: null
    },
    wmode: "window"
  });
}

























