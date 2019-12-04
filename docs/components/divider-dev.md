## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-divider">
  <span class="content">Ou</span>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-divider`: container do componente
- `content`: conteúdo a ser mostrado

## `br-divider`

**Elemento obrigatório**!

O uso ideal do componente são textos pequenos. Por padrão o texto não irá quebrar em linhas.

## `content`

**Elemento obrigatório**!

Para textos grandes use a classe `text-wrap` dentro de `content`. O alinhamento sempre à esquerda.

Exemplo de uso:

```html
<div class="br-divider">
  <span class="content text-wrap"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla
    repudiandae dignissimos dolorem quas, maxime libero autem. Nemo nisi
    voluptatibus, totam itaque ut minima! Maiores sit amet eveniet nulla
    quidem!</span
  >
</div>
```

Para uso com ícones, poderá ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Exemplo de uso:

```html
<div class="br-divider">
  <span class="content">
    <img src="image.png" alt="Texto descritivo" />
  </span>
</div>
```

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<div class="br-divider">
  <span class="content">
    <i class="fas fa-check-circle fa-2x"></i>
  </span>
</div>
```

# Estados

Nenhum estado adicional.

# Regras especiais

Nenhuma regra especial.
