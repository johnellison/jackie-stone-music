var songs=[{title:"1. Minefield",mp3:"/songs/01 Minefield.mp3",wav:"/songs/01 Minefield.wav"},{title:"2. Silence of Twilight",mp3:"/songs/02 Silence of Twilight.mp3",wav:"/songs/02 Silence of Twilight.wav"},{title:"3. Rocketeer",mp3:"/songs/03 Rocketeer.mp3",wav:"/songs/03 Rocketeer.wav"},{title:"4. Zodiacal Light",mp3:"/songs/04 Zodiacal Light.mp3",wav:"/songs/04 Zodiacal Light.wav"},{title:"5. Touch",mp3:"/songs/05 Touch.mp3",wav:"/songs/05 Touch.wav"}];!function(){"use strict";jQuery(document).ready(function(e){function n(){songs.forEach(function(n,t){var o=t+1;e("#jquery_jplayer_audio_"+o).jPlayer({ready:function(){e(this).jPlayer("setMedia",{title:n.title,mp3:n.mp3,wav:n.wav})},play:function(){e(this).jPlayer("pauseOthers")},timeFormat:{padMin:!1},swfPath:"scripts",supplied:"wav, mp3",cssSelectorAncestor:"#jp_container_audio_"+o,smoothPlayBar:!1,remainingDuration:!0,keyEnabled:!0,keyBindings:{muted:null,volumeUp:null,volumeDown:null},wmode:"window",preload:"auto"})})}e(document).foundation({topbar:{scrolltop:!1}}),function(){e('a[href^="#"]').on("click",function(n){n.preventDefault();var t=this.hash,o=e(t);e("html, body").stop().animate({scrollTop:o.offset().top},900,"swing",function(){window.location.hash=t,"#cta"==o.selector&&e("#download-the-wildfire").focus()})})}(),e("#jquery_jplayer_audio_1").waypoint(function(){n()},{triggerOnce:!0,offset:"bottom-in-view"}),function(){songs.slice(0,-1).forEach(function(n,t){var o=t+1;e("#jquery_jplayer_audio_"+o).bind(e.jPlayer.event.ended,function(){e("#jquery_jplayer_audio_"+(o+1)).jPlayer("play")})})}()}(jQuery))}(),function(){"use strict";jQuery(document).ready(function(e){e(".m-share-image").on("click",function(){ga("send",{hitType:"event",eventCategory:"Share",eventValue:2})}),e("#submit-email").on("click",function(){ga("send",{hitType:"event",eventCategory:"Submit Email",eventLabel:"Submit",eventValue:3})}),e("[data-event='contact']").on("click",function(){ga("send",{hitType:"event",eventCategory:"Contact",eventValue:100})}),e(".m-song-wrapper").on(e.jPlayer.event.play,function(){ga("send",{hitType:"event",eventCategory:"Play"})})}(jQuery))}();