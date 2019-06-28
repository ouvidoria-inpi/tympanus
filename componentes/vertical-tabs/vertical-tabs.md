# Estrutura HTML

A estrutura HTML deverá ser uma lista não-ordenada `<ul>` dentro da tag `<nav>`.

## Classes

- A lista `<ul>` receberá a classe **tabs**; 
- Os itens `<li>` receberão a classe **tab-item**.
- A tag `<a>` com a classe **tab-link**. 
- A classe para o bloco de texto é **tab-name** e para o bloco de ícone é **tab-icon** como se vê no exemplo abaixo:

```html
<div class="tab-name">
  <span></span>
</div>
<div class="tab-icon">
  <img>
</div>
```

## Estados

Para o estado ativo será utilizada a classe **is-active** como exemplo abaixo:
```html
<li class="tab-item is-active"></li>
```

## Exemplos de uso

```html
<nav id="navigation" class="page-navigation">
  <ul class="tabs">
    <!-- Item com estado ativo -->
    <li class="tab-item is-active">
      <a href="#" class="tab-link">
        <div class="tab-name">
          <span>Item ativo</span>
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
          <span>Item com ícone</span>
        </div>
      </a>
    </li>
  </ul>
</nav>
```
