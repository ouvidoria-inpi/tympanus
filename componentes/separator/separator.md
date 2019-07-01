# Separador de conteúdo

Nos casos em que for necessário usar um separador com texto explicativo use o componente `br-separator`.

## Exemplo de uso

Veja a seguir como usar o componente.

```html
<div class="br-separator">
  <span class="hr-text">Ou</span>
</div>
```

Recomendamos usar **textos pequenos** ou **resumidos** no componente, pois a regra geral do componente é **não quebrar a linha dos textos**.

Caso não seja possível usar um texto reduzido você poderá usar a classe `text-wrap` em conjunto com `hr-text`. Exemplo:

```html
<div class="br-separator">
  <span class="hr-text text-wrap">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quos officia, fuga porro velit obcaecati nostrum repellendus corporis, ad excepturi tempore. Similique dolorem, nobis dolore facere autem eos laborum quo.
  </span>
</div>
```
