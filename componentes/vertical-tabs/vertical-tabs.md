# Estrurtura HTML e 

A estrurtura HTML deverá ser uma lista não-ordenada <ul><li> dentro da tag <nav>.

# Classes

 - A lista <ul> receberá a classe **tabs**; 
 - Os itens <li> receberão a classe **tab-item**.
 - A tag <a> com a classe **tab-link**. 
 - A classe para o bloco de texto é **tab-name** e para o bloco de ícone é **tab-icon** como se vê no exemplo abaixo:
    <div class="tab-name"><span></span></div>
    <div class="tab-icon"><img></div>

# Estados

Para o estado ativo será utilizada a classe **is-active** como exemplo abaixo:
  <li class="tab-item is-active"></li>

## Exemplos de uso

<nav id="navigation" class="page-navigation">
  <ul class="tabs">
    <!-- Item com estado ativo -->
    <li class="tab-item is-active">
      <a href="#" class="tab-link">
        <div class="tab-name">
          <span>Entrar com CPF</span>
        </div>
      </a>
    </li>
    <!-- Item com ícone -->
    <li class="tab-item">
      <a href="#" class="tab-link">
        <div class="tab-icon">
          <img src="../../assets/images/certificado-digital.png" alt="Certificado Digital">
        </div>
        <div class="tab-name">
          <span>Entrar com Certificado Digital</span>
        </div>
      </a>
    </li>
    <!-- Item sem ícone -->
    <li class="tab-item">
      <a href="#" class="tab-link">
        <div class="tab-name">
          <span>Entrar com NeoID</span>
        </div>
      </a>
    </li>
  </ul>
</nav>



