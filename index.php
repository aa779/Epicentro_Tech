<?php
  // Identifica erros
  // error_reporting(E_ALL);
  //ini_set('display_errors', 'off');

  // Monta o arquivo styles.css
  $nome = array('jumbotron', 'menu', 'servicos', 'solucoes', 'frases', 'produtos', 'equipe', 'contato', 'footer');

  $clear = fopen('styles.css', 'w+');
  fwrite($clear, "");
  fclose($clear);

  $global_css = file_get_contents('assets/global/global.css', 'a+');
  $add_global_css = fopen('styles.css', 'a+');
  fwrite($add_global_css, $global_css);
  fclose($add_global_css);

  for ($i=0; $i < count($nome); $i++) {
    $style = file_get_contents('modules/' . $nome[$i] . '/style.css');

    $styles = fopen('styles.css', 'a+');
    fwrite($styles, "");
    fwrite($styles, $style);
    fclose($styles);
  }

  // Monta o arquivo scripts.js
  $clear = fopen('scripts.js', 'w+');
  fwrite($clear, "");
  fclose($clear);

  for ($i=0; $i < count($nome); $i++) {
    $script = file_get_contents('modules/'.$nome[$i].'/script.js');

    $scripts = fopen('scripts.js', 'a+');
    fwrite($scripts, "");
    fwrite($scripts, $script);
    fclose($scripts);
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Epicentro Tecnologia - Automação Comercial e Marketing Digital</title>
    <meta name="description" content="
    Automação comercial e Marketing Digital. Pouso Alegre, Borda da Mata, Silvianópolis, Espírito Santo do Dourado, Careaçu, Conceição dos Ouros, Congonhal, Estiva">
    <link rel="icon" type="image/png" href="assets/img/Favicon/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css" charset="utf-8">
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-554GHP8');</script>
    <!-- End Google Tag Manager -->
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145445147-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-145445147-1');
    </script>
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-554GHP8" height="0" width="0" style="display:none;visibility:hidden">
      </iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->    
    <nav>
      <?php include 'modules/jumbotron/index.php' ?>
    </nav>
    <main>
      <?php include 'modules/servicos/index.html' ?>
      <?php include 'modules/solucoes/index.html' ?>
      <?php include 'modules/frases/index.html' ?>
      <?php include 'modules/produtos/index.html' ?>
      <?php include 'modules/equipe/index.html' ?>
      <?php include 'modules/contato/index.php' ?>
    </main>
    <footer>
      <?php include 'modules/footer/index.html' ?>
    </footer>
  </body>
  <script src="assets/js/jquery-1.11.3.min.js"></script>
  <script src="assets/js/scroll.js"></script>
  <script src="assets/js/unslider.min.js"></script>
  <script src="scripts.js"></script>
</html>
