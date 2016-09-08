$(document).ready(function(){
  $("button#cat-btn").click(function() {
    $("ul#cat").append("<li>Meow! I am the queen of the animal kingdom!</li><br>");
    $("ul#dog").append("<br><li>Woof! I tire of your lies!</li>");
  });

  $("button#dog-btn").click(function() {
    $("ul#cat").append("<br><li>Meow! Dogs suck!</li>");
    $("ul#dog").append("<li>Woof! Dogs rule!</li><br>");
  });

});
