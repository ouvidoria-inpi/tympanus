# Accordeon

## template básico

```html
<div class="br-accordeon">
  <div class="field is-active">
    <button class="header">
      <span class="icon"><i class="fas fa-minus"></i></span>
      <span class="title">Título do item</span>
    </button>
    <div class="content">
      <p>Conteúdo do item.</p>
    </div>
  </div>
  <div class="field">
    <button class="header">
      <span class="icon"><i class="fas fa-plus"></i></span>
      <span class="title">Título do item</span>
    </button>
    <div class="content">
      <p>Conteúdo do item.</p>
    </div>
  </div>
</div> 
```

# Anatomia do componente

O componente é composto dos seguintes elementos:

- Container principal: `.br-accordeon`
- Linha agrupadora: `.field`
- Área do cabeçalho: `.header`
- Ícone do cabeçalho: `.icon`
- Título do cabeçalho: `.title`
- Área do conteúdo: `.content`

Recomendamos que o ícone fique ao lado esquerdo do título. Caso haja necessidade de colocar o ícone à direita basta inverter a ordem. Veja o exemplo a seguir:

```html
<div class="br-accordeon">
  <div class="field">
    <button class="header">
      <span class="title">Título do item</span>
      <span class="icon"><i class="fas fa-plus"></i></span>
    </button>
    <div class="content">...</div>
  </div>
</div> 
```

## Linha agrupadora

Este elemento é responsável por agrupar o cabeçalho e o conteúdo de cada linha.

Se a linha estiver ativa, a classe `is-active` deve ser aplicada para que o conteúdo seja visualizado.

## Área do cabeçalho

Este elemento deve conter alguma tag html onde o usuário possa interagir para habilitar/desabilitar a linha.

Recomendamos o uso de `<button>` ou `<a>` para manter a semântica correta do código.

## Ícone do cabeçalho

Neste elemento devem ser usados os ícones Fontawesome preferencialmente. Consulte as opções de ícones em [https://fontawesome.com/icons?d=gallery](https://fontawesome.com/icons?d=gallery).

Para a linha desativada use o ícone "+". Para linha ativada use o ícone "-".

## Título do cabeçalho

Área destinada ao título da linha.

## Área do conteúdo

Área destinada ao conteúdo a ser exibido quando a linha está ativa.
