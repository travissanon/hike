$(document).ready(function(){

  // Mobile Nav

  $('.i-nav').on("click", function(){

     $('nav ul').toggleClass('open');
  });

  //Image Opacity

  $('.light-box').css('opacity', '0.4');

  // Image Effects

  $('.lb1,.lb2,.lb3,.lb4,.lb5,.lb6').hover(function(){
    $(this).stop().animate({"opacity": "1"});
    }, function(){
    $(this).stop().animate({"opacity": "0.4"});
  });

  // Links To Buttons

  $('.bt1').click(function(){
    window.location = "http://www.hikingdude.com/hiking-tips.php";
  });
  $('.bt2').click(function(){
    window.location = "html_pages/gear.html";
  });
  $('.bt3').click(function(){
    window.location = "http://whiskandwhittle.tumblr.com/";
  });

  // SM Icon Effects

  $('.sm').mouseenter(function(){
    $(this).fadeOut();
    $(this).fadeIn();
  });

});
