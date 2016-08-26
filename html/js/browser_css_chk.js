var m
$('title').ready(function() {
  var a = document.getElementById('css_link');
  if (navigator.userAgent.match(/Android/i) ||
             navigator.userAgent.match(/webOS/i) ||
             navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPad/i) ||
             navigator.userAgent.match(/iPod/i) ||
             navigator.userAgent.match(/BlackBerry/) || 
             navigator.userAgent.match(/Windows Phone/i) || 
             navigator.userAgent.match(/ZuneWP7/i)
             ) {
    console.log("mobile")
    a.href = "/css/mobile.css";
    m = 1;
  }
  else {
    m = 0;
    console.log("not mobile");
    a.href = "/css/desktop.css";
  }
});
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  console.log(window.orientation);
}, false);