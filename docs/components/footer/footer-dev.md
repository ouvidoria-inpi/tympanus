## Dependências

Nenhuma dependência.

## Código básico

A sintaxe básica do componente é esta demonstrada abaixo:

```html
<div class="br-footer negative br-divider fundo-neutro"></div>
```

## Anatomia do componente

Este componente é formado pelo seguinte elemento:

-   `br-footer` : Componente principal, é o elemento footer(rodapé), situado à parte de baixo de um site web ou sistema. Esse componente possui atualmente dois temas, um negativo e outro positivo;

-   `negative` : Classe que determina a cor do tema, nesse caso o tema padrão do footer é negativo;

-   `br-divider` : Essa classe é usada para ser o separador do footer na partes superior, mostrando início do componente footer. E também é usado para separar o conteúdo composto de redes socias/logos do sistema e a área de informações legais.

-   `fundo-neutro` : classe usada para quando o fundo do componente footer estiver com o tema negativo. O componente divider será de cor branca `#ffffff` .

```html
<div class="br-divider fundo-neutro"></div>
```

## Temas

O componente footer(rodapé) é composto atualmente por dois temas, o negativo(padrão) e o positivo. Esses temas são identificados pelas classes negative e positive respectivamente. O tema negativo as cores de fundo são mais escuras e o tema positivo as cores de fundo são mais claras. No exemplo abaixo, o tema negativo a cor é #071d41 e o tema positivo é da cor #ffffff.

Quando usar o tema negativo, não esqueça de usar a classe de separador `br-divider` mais a classe `fundo-neutro`.

-   Tema negativo

```Html
<div class="br-footer negative br-divider fundo-neutro">
</div>
```

-   Tema positivo

```html
<div class="br-footer positive br-divider"></div>
```

Ao usar o tema positivo usar apenas a classe de separador `br-divider`.
