<section class="section contato" id="contato1">
  <h1 class="topless">Contatos</h1>
  <div class="wrapper" id="formul">
  <?php
  if (!isset($_POST['conf'])) {
  ?>
    <!--form class="form" action="#contato" method="post">
      <label>
        <span class="titulo">Nome:</span>
        <input class="input" type="text" required title="Nome e sobrenome" name="nome">
      </label>
      <label>
        <span class="titulo">Email:</span>
        <input class="input" type="email" required title="Um e-mail para receber nosso retorno" name="email">
      </label>
      <label>
        <span>Assunto:</span><br>
        <input class="full" type="text" required title="Um título sobre sua mensagem" name="assunto">
      </label>
      <label>
        <span>Mensagem</span>
        <textarea required title="Digite a sua mensagem" name="mensagem"></textarea>
      </label>
      <input class="enviar" type="submit" value="enviar" name="conf">
    </form-->
  </div>
  <?php
  } else {
    include("funcoes.php");
    
    $con = connect();
    
    $nome     = htmlentities(anti_injection($_POST['nome']));
    $email    = anti_injection($_POST['email']);
    $assunto  = htmlentities(anti_injection($_POST['assunto']));
    $mensagem = htmlentities(anti_injection($_POST['mensagem']));
    
    $ins = "INSERT INTO contato (nome, email, assunto, mensagem) VALUES (
            \"" . $nome . "\", \"" . $email . "\", \"" . $assunto . "\", \"" . $mensagem . "\"
            )";
    $ok = mysql_query($ins,$con) or die("Erro ao enviar mensagem. Verifique a conexão com o banco de dados." . mysql_error($con));
    
    unset($_POST);
    ?>
    <!--script>
      alert('Mensagem enviada com sucesso. Aguarde nosso contato em breve!')
    </script-->
    <form class="form" action="#contato" method="post">
      <p>Mensagem enviada com sucesso.</p> 
      <input class="enviar" type="submit" value="voltar" name="volt">
    </form>
  <?php
  }
  ?>
  <div class="fechar" id="fechamapa"><a class="close" onclick="hidemap()">Fechar mapa</a></div>
  
  <div class="map-modal" onclick="showmap()">
    <div class="map-wrapper" id="iframe">
      <iframe id="ifr_mapa" class="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d936768.4702796813!2d-46.04235008351767!3d-23.487436943838436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1565229514828!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
</section>