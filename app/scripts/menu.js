// Mobile Nav
$('.i-nav').on("click", function(){
   $('nav ul').toggleClass('open');
   $('.head').toggleClass('space');
   $('.container, .accord').toggleClass('dim');
   $('html').toggleClass('disableScroll');
});

//Image placement
if ( $(window).width() < 961) {
  $('.tips_img').attr('src', 'app/img/andreas-mobile.jpg');
}
$(window).on('resize', function(){
  if ( $(window).width() < 961) {
    $('.tips_img').attr('src', 'app/img/andreas-mobile.jpg');
  } else {
    $('.tips_img').attr('src', 'app/img/andreas.jpg');
  }
});

// Peaks
$('.mount-nav').on('click', function(){
  $('.mtn-container').toggleClass('openSesame');
  $('.mount-nav img').toggleClass('flip');
});
