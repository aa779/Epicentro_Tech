// Detectar tela

var resolucao = window.innerWidth;
var numeroDeImagens = 4;//document.getElementsByClassName('frase');

// if (resolucao < 440) {
  // $('.jumbotron .banner').removeClass('slider');
  // $('.jumbotron').addClass('mobile');
// } else {
  // $('.jumbotron').removeClass('mobile');
  // $('.jumbotron .banner').addClass('slider');
// }

// if ($('.jumbotron.mobile').length > 0) {
  // console.log('mobile');

  // $('.jumbotron.mobile .banner').remove();

  // $('.jumbotron.mobile .menu').after('<div class="banner"><ul><li class="jumbo-bg"><div class="frase"><p>A Epicentro Tecnologia implanta sistemas de automação comercial, desenvolve sistemas e páginas Internet e Intranet além de analisar, instalar e cuidar da infraestrutura de informática da sua empresa</p></div></li></ul></div>');

  // $('.jumbo-bg').css('background-image','url("assets/img/Jumbotron/jumbotron1640.jpg")');
  // $('.jumbo-bg').css('height','100%');
// }

// Slider
$(function() {
  var slider = $('.slider').unslider({
    dots: true,
    delay: 12000,
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
