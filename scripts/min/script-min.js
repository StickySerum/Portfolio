$(document).ready(function(){function o(){window.history.replaceState("",document.title,window.location.origin+window.location.pathname+window.location.search)}$(".logos-container .logo").click(function(){switch($(".mac_screen_content .macbook-background").removeClass("allin beaverbrook encore mendocino skinlab"),this.id){case"allin-logo":$(".mac_screen_content .macbook-background").addClass("allin");break;case"beaverbrook-logo":$(".mac_screen_content .macbook-background").addClass("beaverbrook");break;case"encore-logo":$(".mac_screen_content .macbook-background").addClass("encore");break;case"mendocino-logo":$(".mac_screen_content .macbook-background").addClass("mendocino");break;case"skinlab-logo":$(".mac_screen_content .macbook-background").addClass("skinlab")}}),$(".menulink").click(function(){setTimeout(function(){o()},1)})});