$(document).ready(function(){

  // Mobile Nav

  $('.i-nav').on("click", function(){

     $('nav ul').toggleClass('open');
     $('.container, .accord').toggleClass('dim');
  });

  if ( $(window).width() > 999) {
    $('.nav').addClass('nav-pills');
  } else {
    $('.nav').removeClass('nav-pills');
    $('nav').removeClass('pos');
  }

  //Image Opacity & Effects

  if ( $(window).width() < 999) {
    $('.light-box').css('opacity', '1');
  }
  else {
    $('.light-box').css('opacity', '0.4');

    $('.lb1,.lb2,.lb3,.lb4,.lb5,.lb6').hover(function(){
      $(this).stop().animate({"opacity": "1"});
      }, function(){
      $(this).stop().animate({"opacity": "0.4"});
    });
  }

  // Links To Buttons

  $('.bt1').click(function(){
    window.open("http://www.hikingdude.com/hiking-tips.php", '_blank');
  });
  $('.bt2').click(function(){
    window.open("html_pages/gear.html");
  });
  $('.bt3').click(function(){
    window.open("http://whiskandwhittle.tumblr.com/", '_blank');
  });
  $('.sm').click(function(){
    window.open("http://whiskandwhittle.tumblr.com/", '_blank');
  });
});
