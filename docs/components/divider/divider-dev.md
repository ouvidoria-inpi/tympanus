## Dependências

Nenhuma dependência.

## Código básico

A sintaxe básica do componente é esta demonstrada abaixo:

``` html
<div class="br-divider">
</div>
```

*A cor padrão do divider é o #cccccc, que está definida na cor da borda superior do componente.

# Anatomia do componente

Este componente é formado pelo seguinte elemento:

* `br-divider` : container do componente, essa é a classe principal, onde a mesma é usada para a maioria dos fundos(backgrounds), tais como: fundo positivo(de cor branca `#ffffff` ) e fundo negativo(de cor mais forte `#071D41` ).

* `fundo-neutro` : classe usada para quando o fundo do componente precisar ser neutro. Exemplo: cor de background igual a `#cccccc` , sendo assim, o divider será de cor branca `#ffffff` .

``` html
<div class="br-divider fundo-neutro">
</div>
```

## `br-divider` 

**Elemento obrigatório!**

O uso ideal é para separar conteúdos, normalmente entre componentes. Exemplo separar conteúdo de um componente de abas do conteúdo abaixo ou acima dele.
Podendo, também ser usado como divider de assuntos num componente acordeão.

# Estados

Nenhum estado adicional.

# Regras especiais

Nenhuma regra especial.

