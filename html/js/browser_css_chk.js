/*
   Copyright 2016 Samuel H. Walker

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
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
  }
  else {
    console.log("not mobile");
    a.href = "/css/desktop.css";
  }
});
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  console.log(window.orientation);
}, false);
