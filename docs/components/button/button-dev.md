## Dependências

Nenhuma dependência.

## Código básico

```html
<button
    class="br-button [primary|secondary|action|tertiary] [mini|circle] [loading]"
    type="button"
    [primary|secondary|action|tertiary]
    [mini|circle]
    [disabled|loading]
>
    Button
</button>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

-   `br-button` : container do componente

## Tipos de Botão

O tipo DEVE ser informado no mesmo nível do container do elemento. Pode ser aplicado como **classe ou atributo**.

A única exceção é para o tipo Terciário, pois caso não seja informado o tipo ele será aplicado de forma automática.

Botões para uso comum:

-   Primário (primary)
-   Secundário (secondary)
-   Terciário (tertiary)
-   Call to Action (action)

Variações:

-   Mini
-   Circular (circle)

Estados:

-   Desativado (disabled)
-   Em progresso (loading)

Você poderá aplicar as variações para alguns botões. Os estados podem ser aplicados para qualquer tipo de botão. Veja na documentação de Designer alguns exemplos.

### Aplicar o tipo usando classe

```html
<!-- Botão Primário -->
<button class="br-button primary" type="button">
    Entrar
</button>

<!-- Botão Secundário -->
<button class="br-button secondary" type="button">
    Voltar
</button>

<!-- Botão Call to Action -->
<button class="br-button action" type="button">
    Adicionar
</button>

<!-- Botão Terciário -->
<button class="br-button tertiary" type="button">
    Fazer Login
</button>
```

> Por motivos de compatibilidade, classes com prefixo `-is` também aplicam os tipos. Ex: is-primary

### Aplicar o tipo usando atributo

```html
<!-- Botão Primário -->
<button class="br-button" type="button" primary>
    Entrar
</button>

<!-- Botão Secundário -->
<button class="br-button" type="button" secondary>
    Voltar
</button>

<!-- Botão Call to Action -->
<button class="br-button" type="button" action>
    Adicionar
</button>

<!-- Botão Terciário -->
<button class="br-button" type="button" tertiary>
    Fazer Login
</button>
```

### Aplicar as varições

As variações podem ser aplicadas em conjunto com os tipos. É possivel aplicar usando classe ou atributo.

```html
<!-- Usando classes -->
<button class="br-button primary mini" type="button">
    Entrar
</button>
<button class="br-button action circle" type="button">
    <i class="fas fa-plus"></i>
</button>

<!-- Usando atributos -->
<button class="br-button" type="button" primary mini>
    Entrar
</button>
<button class="br-button" type="button" action circle>
    <i class="fas fa-plus"></i>
</button>
```

## O Botão Terciário

Segundo a documentação de Designer este botão deve se comportar como um hyperlink.

Por ser um tipo mais comum que os outros botões, informar o tipo `tertiary` é opcional. Botões sem tipo serão tratados como Terciário.

Label sem ícone: Texto **com** sublinhado

```Html
<button class="br-button" type="button">
    <u>Fazer login</u>
</button>
```

Label com ícone: Texto **sem** sublinhado

```Html
<button class="br-button" type="button">
    <i class="fas fa-sliders-h"></i>
    Filtrar
</button>
```

Apenas ícone:

```Html
<!-- Versão normal -->
<button class="br-button" type="button" circle>
    <i class="fas fa-envelope"></i>
</button>

<!-- Versão mini -->
<button class="br-button" type="button" circle mini>
    <i class="fas fa-phone"></i>
</button>
```

## Estados

Os estados de **focus**, **hover** e **active** são aplicados de forma automática no componente.

Para os estados **disabled** e **loading** é necessário aplicar o respectivo atributo no componente.

Exemplo:

```Html
<!-- Exemplo de botão primário desativado -->
<button class="br-button" type="button" primary disabled>
    Entrar
</button>

<!-- Exemplo de botão primário em progresso -->
<button class="br-button" type="button" primary loading>
    Avançar
</button>
```

## Regras especiais e dicas

-   Botões Primário, Secundário e Terciário ocupam 100% da largura de tela em dispositivos móveis
-   O botão Call to Action não possui variação mini
-   Botões usando as variações Mini e Circular mantém suas propriedades mesmo em dispositivos móveis
