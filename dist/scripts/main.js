function createTracks(){createMinefield(),createRocketeer(),createTouch(),createSpiderweb()}function createMinefield(){$("#jquery_jplayer_audio_1").jPlayer({ready:function(){$(this).jPlayer("setMedia",{title:"1. Minefield",mp3:"/assets/mp3/minefield.mp3"})},play:function(){$(this).jPlayer("pauseOthers")},timeFormat:{padMin:!1},swfPath:"js",supplied:"mp3",cssSelectorAncestor:"#jp_container_audio_1",smoothPlayBar:!0,remainingDuration:!0,keyEnabled:!0,keyBindings:{muted:null,volumeUp:null,volumeDown:null},wmode:"window"})}function createRocketeer(){$("#jquery_jplayer_audio_2").jPlayer({ready:function(){$(this).jPlayer("setMedia",{title:"2. Rocketeer",mp3:"/assets/mp3/minefield.mp3"})},play:function(){$(this).jPlayer("pauseOthers")},timeFormat:{padMin:!1},swfPath:"js",supplied:"mp3",cssSelectorAncestor:"#jp_container_audio_2",smoothPlayBar:!0,remainingDuration:!0,keyEnabled:!0,keyBindings:{muted:null,volumeUp:null,volumeDown:null},wmode:"window"})}function createTouch(){$("#jquery_jplayer_audio_3").jPlayer({ready:function(){$(this).jPlayer("setMedia",{title:"3. Touch",mp3:"/assets/mp3/touch.mp3"})},play:function(){$(this).jPlayer("pauseOthers")},timeFormat:{padMin:!1},swfPath:"js",supplied:"mp3",cssSelectorAncestor:"#jp_container_audio_3",smoothPlayBar:!0,remainingDuration:!0,keyEnabled:!0,keyBindings:{muted:null,volumeUp:null,volumeDown:null},wmode:"window"})}function createSpiderweb(){$("#jquery_jplayer_audio_5").jPlayer({ready:function(){$(this).jPlayer("setMedia",{title:"Spiderweb",mp3:"/assets/mp3/spiderweb.mp3"})},play:function(){$(this).jPlayer("pauseOthers")},timeFormat:{padMin:!1},swfPath:"js",supplied:"mp3",cssSelectorAncestor:"#jp_container_audio_5",smoothPlayBar:!0,remainingDuration:!0,keyEnabled:!0,keyBindings:{muted:null,volumeUp:null,volumeDown:null},wmode:"window"})}function animations(){$("#play").hover(function(){$(".the-wildfire").css("color","#AF1300")},function(){$(".the-wildfire").css("color","#000000")})}function smoothScroll(){$('a[href^="#"]').on("click",function(e){e.preventDefault();var t=this.hash,n=$(t);$("html, body").stop().animate({scrollTop:n.offset().top},900,"swing",function(){window.location.hash=t})})}function goToDownload(){$("#download-music").click(function(e){e.preventDefault(),$("input.email-for-download").removeAttr("value"),$("input").focus()})}function fullHeight(){$(window).resize(function(){var e=$(window).height();$(".full-height").css("height",e)})}function lyricsToggle(){$(".m-lyrics-link").on("click",function(e){e.preventDefault(),$(this).parent(".m-lyrics-button-wrapper").prev().toggle()})}function shareToggle(){$(".m-share-song-label").click(function(e){e.preventDefault(),$(this).next(".m-share-song-list").toggle()}),$(".m-share-song-icon").click(function(e){e.preventDefault(),$(this).nextAll(".m-share-song-list").toggle()})}jQuery(document).ready(function(e){fullHeight(),e(".vertical-center").flexVerticalCenter({parentSelector:".full-height",verticalOffset:"-64"}),e(".vertical-center2").flexVerticalCenter({parentSelector:".about"}),smoothScroll(),animations(),createTracks()}),function(e){e.fn.flexVerticalCenter=function(t){var n,i=e.extend({cssAttribute:"margin-top",verticalOffset:0,parentSelector:null,debounceTimeout:25},t||{});return this.each(function(){var t=e(this),o=function(){var e=i.parentSelector?t.parents(i.parentSelector).first().height():t.parent().height();t.css(i.cssAttribute,(e-t.height())/2+parseInt(i.verticalOffset))};o(),e(window).resize(function(){clearTimeout(n),n=setTimeout(o,i.debounceTimeout),o()}),e(window).on("orientationchange",function(){o()}),t.find("img").load(o)})}}(jQuery),lyricsToggle(),shareToggle();