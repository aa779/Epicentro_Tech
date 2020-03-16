// Detectar tela

var resolucao = window.innerWidth;
var numeroDeImagens = 3;

if ($('.produtos.mobile').length > 0) {
  console.log('mobile');

  // $('.produtos.mobile .banner').remove();

  $('.produto-bg').css('background-image','url("assets/img/produtos/impressoras.jpg")');
  $('.produto-bg').css('height','100%');
}

// Slider
$(function() {
  var slider = $('.slider2').unslider({
    dots: true,
    delay: 1000,
    speed: 800,
    fluid: true,
    keys: false
  });

  var data = slider.data('unslider');
  $('.thumbs')
  .on('click', 'li', function() {
    data.move($(this).index());
  })
  .on('mouseover', function() {
   	data.stop();
  })
  .on('mouseout', function() {
   	data.start();
  });
});