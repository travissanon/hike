$('.slider').each(function() {
  var $this   = $(this); // 'this' is reffering to the slider.
  var $group  = $this.find('.slide-group'); // Finds '.slide-group' within '.slider (this)'.
  var $slides = $this.find('.slide'); // Finds '.slide' within '.slider (this)'.
  var buttonArray  = []; // Used to hold the number buttons corresponding to slides.
  var currentIndex = 0; // Starts at slide 1 (0 in the editor).
  var timeout; // Sets time for slide before shifting to another.

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {
      $slides.eq(currentIndex).css( {display: 'none'} )
      $slides.eq(newIndex).css( {left: 0} );
      $group.css( {left: 0} );
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide-buttons');
    buttonArray.push($button);
  });

  advance();


});
