$('.shop-imgs ul li a').click(function(){
  //var what = this;
  $.ajax({
    url: 'app/scripts/data/product-info.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
      //var dos = $(what).parent('li').index();
      $(data.ProductData.shirt).each(function(index, value){
        $('.product-title').html(value.title);
        console.log(value.title);
      });
    }
  });
});
function hokay(){
  $('pc1').css('display', 'none');
}
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
      console.log(uno);
      if( uno === 0 ) {
        $(data.ShopData.apparel).each(function(index, value){
          console.log(value.image1);
          $('.shop-imgs').html('<img src="'+value.image1+'" />' +
                               '<img src="'+value.image2+'" />' +
                               '<img src="'+value.image3+'" />' +
                               '<img src="'+value.image4+'" />' +
                               '<img src="'+value.image5+'" />' +
                               '<img src="'+value.image6+'" />' );
        });
      } else if ( uno === 1 ) {
        $(data.ShopData.camp).each(function(index, value){
          $('.shop-imgs').html('<img src="'+value.image7+'" />' +
                               '<img src="'+value.image8+'" />' +
                               '<img src="'+value.image9+'" />' +
                               '<img src="'+value.image10+'" />' +
                               '<img src="'+value.image11+'" />' +
                               '<img src="'+value.image12+'" />' );
        });
      } else if ( uno === 2 ) {
        $(data.ShopData.utilities).each(function(index, value){
          $('.shop-imgs').html('<img src="'+value.image13+'" />' +
                               '<img src="'+value.image14+'" />' +
                               '<img src="'+value.image15+'" />' +
                               '<img src="'+value.image16+'" />' +
                               '<img src="'+value.image17+'" />' +
                               '<img src="'+value.image18+'" />' );
        });
      } else if ( uno === 3 ) {
        $(data.ShopData.gadgets).each(function(index, value){
          $('.shop-imgs').html('<img src="'+value.image19+'" />' +
                               '<img src="'+value.image20+'" />' +
                               '<img src="'+value.image21+'" />' +
                               '<img src="'+value.image22+'" />' +
                               '<img src="'+value.image23+'" />' +
                               '<img src="'+value.image24+'" />' );
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
