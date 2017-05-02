$('.shop-options ul li a').click(function(e){
  e.preventDefault();
  var that = this;
  $.ajax({
    url: 'app/scripts/data/categories.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      var uno = $(that).parent('li').index();
      var imgIds = ['#img-1', '#img-2', '#img-3', '#img-4', '#img-5', '#img-6'];
      var imgData = [
        ['/product/shirt', 'shirt', '$20.00'],
        ['/product/hat', 'hat', '$12.00'],
        ['/product/jacket', 'jacket', '$60.00'],
        ['/product/pants', 'pants', '$50.00'],
        ['/product/shoes', 'shoes', '$40.00'],
        ['/product/jacket2', 'jacket2', '$10.00'],
        ['/product/blanket', 'blanket', '$140.00'],
        ['/product/lantern', 'lantern', '$90.00'],
        ['/product/survival', 'survival', '$110.00'],
        ['/product/axe', 'axe', '$85.00'],
        ['/product/tent', 'tent', '$40.00'],
        ['/product/sleeping-bag', 'sack', '$160.00'],
        ['/product/pack', 'pack', '$75.00'],
        ['/product/canteen', 'canteen', '$25.00'],
        ['/product/flint', 'flint', '$30.00'],
        ['/product/knife', 'knife', '$70.00'],
        ['/product/hook', 'hook', '$60.00'],
        ['/product/log', 'log', '$9.00'],
        ['/product/fishing-pod', 'pod', '$30.00'],
        ['/product/hobo-eat-kit', 'utensils', '$32.00'],
        ['/product/whistle', 'whistle', '$34.00'],
        ['/product/matches', 'matches', '$17.00'],
        ['/product/tweezers', 'tweezers', '$25.00'],
        ['/product/flashlight', 'flashlight', '$60.00']
      ];
      if( uno === 0 ) {
        $(data.ShopData.apparel).each(function(index, value){
          for (var i = 0 ; i <= 5 ; i++){
            $('.data-imgs ' + imgIds[i]).find('img').attr('src', value['image_' + i]);
            $('.data-imgs ' + imgIds[i]).find('a').attr('href', imgData[i][0]);
            $('.data-imgs ' + imgIds[i]).find('h3').html(imgData[i][1].toUpperCase());
            $('.data-imgs ' + imgIds[i]).find('p').html(imgData[i][2]);
          }
        });
      } else if ( uno === 1 ) {
        $(data.ShopData.camp).each(function(index, value){
          for (var i = 0 ; i <= 5 ; i++){
            $('.data-imgs ' + imgIds[i]).find('img').attr('src', value['image_' + i]);
            $('.data-imgs ' + imgIds[i]).find('a').attr('href', imgData[6+i][0]);
            $('.data-imgs ' + imgIds[i]).find('h3').html(imgData[6+i][1].toUpperCase());
            $('.data-imgs ' + imgIds[i]).find('p').html(imgData[6+i][2]);
          }
        });
      } else if ( uno === 2 ) {
        $(data.ShopData.utilities).each(function(index, value){
          for (var i = 0 ; i <= 5 ; i++){
            $('.data-imgs ' + imgIds[i]).find('img').attr('src', value['image_' + i]);
            $('.data-imgs ' + imgIds[i]).find('a').attr('href', imgData[12+i][0]);
            $('.data-imgs ' + imgIds[i]).find('h3').html(imgData[12+i][1].toUpperCase());
            $('.data-imgs ' + imgIds[i]).find('p').html(imgData[12+i][2]);
          }
        });
      } else if ( uno === 3 ) {
        $(data.ShopData.gadgets).each(function(index, value){
          for (var i = 0 ; i <= 5 ; i++){
            $('.data-imgs ' + imgIds[i]).find('img').attr('src', value['image_' + i]);
            $('.data-imgs ' + imgIds[i]).find('a').attr('href', imgData[18+i][0]);
            $('.data-imgs ' + imgIds[i]).find('h3').html(imgData[18+i][1].toUpperCase());
            $('.data-imgs ' + imgIds[i]).find('p').html(imgData[18+i][2]);
          }
        });
      }
    }
  });
});

$(function(){
  $('.mtn-mtn li a').click(function(){
    var that = this;
    $.ajax({
      url: 'app/scripts/data/articles.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data) {
        var uno = $(that).parent('li').index();
        $(data.MtnData[uno]).each(function(index, value) {
          $('.mtn-container').toggleClass('openSesame');
          $('.mount-nav img').toggleClass('flip');
          $('.mtn-text').html(value.title).hide().fadeIn(400);
          $('.mtn-title').html(value.text).hide().fadeIn(600);
          $('.mtn-title-2').html(value.text2).hide().fadeIn(700);
          $('.mtn-title-3').html(value.text3).hide().fadeIn(800);
          $('.ex-img').html('<img src="'+value.image+'" class="tips_img"/>').hide().fadeIn(400);
        });
      }
    });
  });
});

$('.hover-dim').mouseover(function(){
  var choice = $(this).parent().prop('id');
  $('#' + choice + ' h3').css('visibility', 'visible');
  $('#' + choice + ' p').css('visibility', 'visible');
});

$('.hover-dim').mouseleave(function(){
  $('.data-imgs h3').css('visibility', 'hidden');
  $('.data-imgs p').css('visibility', 'hidden')
});
