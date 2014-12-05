/* jshint devel:true */
//call functions when document is ready
jQuery(document).ready(function($) {
  fullHeight();
    $('.vertical-center').flexVerticalCenter( {parentSelector: '.full-height', verticalOffset: '-64' });
  $('.vertical-center2').flexVerticalCenter( {parentSelector: '.about' });
  smoothScroll();
  animations();
  createTracks();
  //goToDownload();
});

function createTracks() {
  createMinefield();
  createRocketeer();
  createTouch();
  createSpiderweb();
}

//init jPlayer 1
function createMinefield() {
  $( "#jquery_jplayer_audio_1" ).jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "1. Minefield",
        mp3: "/assets/mp3/minefield.mp3"
        /* TODO: oga: ".ogg" */
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "mp3",
    cssSelectorAncestor: "#jp_container_audio_1",
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

//init jPlayer 2
function createRocketeer() {
  $("#jquery_jplayer_audio_2").jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "2. Rocketeer",
        mp3: "/assets/mp3/minefield.mp3"
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
    supplied: "mp3",
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
}

//init jPlayer 3
function createTouch(){
  $("#jquery_jplayer_audio_3").jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "3. Touch",
        mp3: "/assets/mp3/touch.mp3"
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
    supplied: "mp3",
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
}

//init jPlayer 5 - spiderweb
function createSpiderweb() {
  $( "#jquery_jplayer_audio_5" ).jPlayer({
    ready: function(event) {
      $(this).jPlayer("setMedia", {
        title: "Spiderweb",
        mp3: "/assets/mp3/spiderweb.mp3"
        /* TODO: oga: ".ogg" */
      });
    },
    play: function() { // Avoid multiple jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    },
    timeFormat: {
      padMin: false
    },
    swfPath: "js",
    supplied: "mp3",
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


/* TODO: Wrap animations in a non-touch if statement */
//jQuery Animations

function animations(){
  $( "#play" ).hover( 
    function(){
      $(".the-wildfire")
        .css("color", "#AF1300");

    },
    function(){
      $(".the-wildfire")
        .css("color", "#000000");
    }
  );
}


//scrollTo #hash animations
function smoothScroll(){
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
}

function goToDownload() {
  $( '#download-music' ).click( function (e) {
    e.preventDefault();
    $("input.email-for-download").removeAttr('value');
    $("input").focus();
  });
}

//@PaulSpr's jQuery Flex Vertical Center Plugin
(function( $ ){

  $.fn.flexVerticalCenter = function( options ) {
    var settings = $.extend({
      cssAttribute:   'margin-top', // the attribute to apply the calculated value to
      verticalOffset: 0,            // the number of pixels to offset the vertical alignment by
      parentSelector: null,         // a selector representing the parent to vertically center this element within
      debounceTimeout: 25           // a default debounce timeout in milliseconds
    }, options || {});
    var debounce;

    return this.each(function(){
      var $this   = $(this); // store the object

      // recalculate the distance to the top of the element to keep it centered
      var resizer = function () {

        var parentHeight = (settings.parentSelector) ? $this.parents(settings.parentSelector).first().height() : $this.parent().height();

        $this.css(
          settings.cssAttribute, ( ( ( parentHeight - $this.height() ) / 2 ) + parseInt(settings.verticalOffset) )
        );
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).resize(function () {
          clearTimeout(debounce);
          debounce = setTimeout(resizer, settings.debounceTimeout);
          resizer();
      });

      // Call on orientation change
      $(window).on("orientationchange", function(){
        resizer();
      });

      // Apply a load event to images within the element so it fires again after an image is loaded
      $this.find('img').load(resizer);

    });

  };

})( jQuery );


//when browser resizes, set the height of .full-height equal to viewport
function fullHeight() {
  $(window).resize(function(){
    //assign viewport height to variable
    var viewportHeight = $(window).height();

    //assign variable to css "height: " value for the class .full-height
    $('.full-height').css("height", viewportHeight);
  });
}

function lyricsToggle() {
  //wrap lyrics button in jquery object & add click handler
  $( '.m-lyrics-link' ).on( 'click', function( e ){
    
    //prevent default link action
    e.preventDefault();

    //find nearest lyrics image and slideDown
    $( this ).parent( '.m-lyrics-button-wrapper' ).prev().toggle();
  });
}

lyricsToggle();

function shareToggle() {
  $( ".m-share-song-label" ).click( function( e ) {
    e.preventDefault();
    $( this ).next( '.m-share-song-list' ).toggle( );
    });

  $( ".m-share-song-icon" ).click( function( e ) {
    e.preventDefault();
    $( this ).nextAll( '.m-share-song-list' ).toggle( );
    });
}

shareToggle();





















