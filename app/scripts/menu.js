// Mobile Nav
$('.i-nav').on("click", function(){
   $('nav ul').toggleClass('open');
   $('.head').toggleClass('space');
   $('.container, .accord').toggleClass('dim');
   $('html').toggleClass('disableScroll');
});

// Peaks
$('.mount-nav').on('click', function(){
  $('.mtn-container').toggleClass('openSesame');
  $('.mount-nav img').toggleClass('flip');
});
