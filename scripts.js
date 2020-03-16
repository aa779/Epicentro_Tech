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
// Menu

  // Mobile
  var isActive = false;

  $('.menu-bar').click(function() {
    console.log(isActive);
    if (isActive === false) {
      $('.menu-bar').attr('src','assets/img/Menu/menu-bar-active.png');
      $('.menu ul').slideDown();
      isActive = true;
    } else if (isActive === true) {
      $('.menu-bar').attr('src','assets/img/Menu/menu-bar.png');
      $('.menu ul').slideUp();
      isActive = false;
    }
  });

  if ($(window).width() <= 800) {
    $('.item-menu').click(function() {
      $('.menu-bar').attr('src','assets/img/Menu/menu-bar.png');
      $('.menu ul').slideUp();
      isActive = false;
    });
  }

  // Trocar Logo
  if ($(window).width() < 786) {
    $('.menu .logo').attr('src', 'assets/img/Menu/icone.png');
  }

  // Aumentar largura
  var activate = $(window).height();
  $(window).scroll(function() {
    var menuTop = $('.menu:eq(0)').offset().top;
    if (menuTop < activate) {
      $('.menu:eq(0)').removeClass('full');
    }
    if (menuTop > activate) {
      $('.menu:eq(0)').addClass('menu full');
    } 
  });
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
});// Equipe

function mostrarDescricao(arg) {

  $('.membro.'+arg+'').hover(function() {

    if ($('.descricao-membro.'+arg+'').css('display') != 'list-item') {

      $('.descricao-membro').slideUp();
      $('.descricao-membro.'+arg+'').slideDown();
    }

  console.log();
});
}

mostrarDescricao('alvaro');
mostrarDescricao('gabriel');
mostrarDescricao('clauverson');
mostrarDescricao('jessica');
mostrarDescricao('joao');
mostrarDescricao('junior');hidemap();
  
function hidemap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  c.style.visibility = "hidden";
  c.style.display = "none";
  d.style.visibility = "hidden";
  d.style.display = "none";
  e.style.top = "176px";
  e.innerHTML = "<a class='close' onclick='showmap()'>Exibir mapa</a>";
  
  var nav = detect();
  if (nav == "Chrome")
    f.style.visibility = "initial";
  else
    f.style.top = "0";
}

function showmap() {
  var c = document.getElementById('ifr_mapa');
  var d = document.getElementById('iframe');
  var e = document.getElementById('fechamapa');
  var f = document.getElementById('formul');

  c.style.visibility = "visible";
  c.style.display = "initial";
  d.style.visibility = "visible";
  d.style.display = "initial";
  e.innerHTML = "<a class='close' onclick='hidemap()'>Fechar mapa</a>";

  var nav = detect();
  if (nav == "Chrome")
    f.style.visibility = "hidden";
  else
    f.style.top = "55%";
}

function detect () {
  var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  var isChrome = !!window.chrome && !isOpera;
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  
  if (isOpera)
    return "Opera";
  else if (isFirefox)
    return "Firefox";
  else if (isSafari)
    return "Safari";
  else if (isChrome)
    return "Chrome";
  else if (isIE)
    return "Explorer";
}

function scroll(pixels) {
    window.scrollBy(0, pixels);
}