$(document).ready(function(){
  $("button#cat-btn").click(function() {
    $("ul#cat").append("<li>Meow! I am the queen of the animal kingdom!</li><br>");
    $("ul#dog").append("<br><li>Woof! I tire of your lies!</li>");
  });

  $("button#dog-btn").click(function() {
    $("ul#cat").append("<br><li>Meow! Dogs suck!</li>");
    $("ul#dog").append("<li>Woof! Dogs rule!</li><br>");
  });

  $("h2#dogphoto").click(function(){
    $("ul#dog").append("<img src='https://placekitten.com/300/200'>");
    $("ul#dog").children("img").last().click(function(){
      $(this).remove();
    });
  });


});
