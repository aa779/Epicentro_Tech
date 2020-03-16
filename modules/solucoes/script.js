// Portfolio

// Navegação
$('.section.portfolio .laptop .nav-right').click(function() {
  $('.section.portfolio ul').css('left', '-100%');
});

$('.section.portfolio .laptop .nav-left').click(function() {
  $('.section.portfolio ul').css('left', '0');
});

// Mostrar sites
function mostraImagem(arg, item) {
  $('.icone.' + arg).click(function() {
    $('.icone').css('background-color', '#a00');
    $('.imageFull').animate({ 'width':'100%' }, 500);
    $('.textoFull').animate({ 'width':'0' }, 500);
    $('.solucao').css('display', 'none');
    $('.solucao').css('opacity', '0');
    $('.solucao').css('position', 'absolute');
    $('.solucao').css('top', '100%');
    $('.solucao').animate({ scrollTop: 0 }, 800);
    
    $('.imageFull').fadeOut(function() {
      $('.imageFull').css('background-image', 'url("assets/img/solucoes/' + arg + '.jpg")');
    });
    
    $('.imageFull').fadeIn();
    $('.imageFull').animate({ 'width':'15%' }, 500);
    $('.imageFull').css('border-radius', '0');
    
    $('.textoFull').animate({ 'width':'100%' }, 1000);
    
    $('.solucao.' + item).css('display', 'inline');
    // $('.solucao.' + item).css('border', '1px solid #0f0');
    $('.solucao.' + item).animate({ 'opacity': '1' }, 1000).animate({ 'top': '20px' }, 1000);
    
    $('.icone.' + arg).css('background-color', '#e00');
  });
}

mostraImagem('lojas', 'lj');
mostraImagem('local', 'lc');
mostraImagem('resta', 'rt');
mostraImagem('nuvem', 'nv');
mostraImagem('infra', 'ie');
mostraImagem('equip', 'hw');

$('.section.portfolio .laptop').click(function() {
  $('.section.portfolio').top = 0;
});
