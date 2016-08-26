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
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 70) {
            $("header").addClass('scrolled');
        } else {
            $("header").removeClass("scrolled");
        }
    });
});
$(function() {
  $("header").click(function() {
    event.stopPropagation();
    $( "#mainNavMobi" ).show( "slide", { direction: "left" });
  });
  $("#mainNavMobi").on("click", function (event) {
        event.stopPropagation();
    });
  $( document ).on("click", function () {
    $("#mainNavMobi").hide();
  });
});