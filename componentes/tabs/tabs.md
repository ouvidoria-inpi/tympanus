# Abas

Para uso de Abas use o componente `br-tabs`.

> **Atenção**! Use a tag `<nav>` para manter a semântica correta do código.

## Exemplo básico

```html
<nav>
  <ul class="br-tabs">
    <li class="tab-item">
      <a href="#" class="tab-link">
        <div class="tab-icon">
          <img src="imagem.png" alt="Texto alternativo">
        </div>
        <div class="tab-name">
          <span>item</span>
        </div>
      </a>
    </li>
  </ul>
</nav>
```

O comportamento padrão das Abas é a **listagem horizontal**. Para Abas Verticais adicione a classe `flex-column` ao componente. Veja o exemplo a seguir:

```html
<ul class="br-tabs flex-column">...</ul>
```

> **Dica**! Use a Grid para modificar a largura de Abas Verticais. Veja o exemplo a seguir:

```html
<div class="row">
  <!-- coluna das abas -->
  <div class="col-3">
    <nav>
      <ul class="br-tabs flex-column">...</ul>
    </nav>
  </div>
  <!-- coluna do conteúdo -->
  <div class="col">...</div>
</div>
```

## Classes

- Cada item recebe a classe **tab-item**;
- Links recebem a classe **tab-link**.;
- O nome do item recebe a classe **tab-name**;
- Para ícones (item opcional) use a classe **tab-icon**.

## Estados

Para o estado ativo será utilizada a classe **is-active** como exemplo abaixo:
```html
<ul class="br-tabs">
  <li class="tab-item is-active"></li>
</ul>
```
