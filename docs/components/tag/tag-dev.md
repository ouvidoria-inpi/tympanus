## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-tag">
    <div class="content">
        <div class="icon"><i class="fa fa-car"></i></div>
        <span>Mitsubishi Outlander</span>
    </div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

-   `br-tag` (obrigatório): container do componente.
-   `content` (obrigatório): conteúdo da tag, engloba o ícone e o texto.
-   `icon` (opcional): ícone ou miniatura para a tag. Para miniatura, usar `<img src="" alt="">` e para ícone do Fontawesome - `<i class="fas">`.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

# Tipos

## Tag de Entrada

Representam dados ou informações inseridas em campos de texto e convertidas em um componente Tag.

Usar o prefixo `br-tag-input`.

Exemplo de uso:

```html
<div class="br-tag-input"></div>
    <input placeholder="Insira um texto e aperte a tecla ENTER">
</ul>
```

Tags de entrada podem incluir um **ícone Remover**.
A classe `tag-input-close` deve ser aplicada em conjunto com a classe container `br-tag`. Além disso, a classe `close` deve ser inserida em uma DIV (que deverá ser incluída após a DIV contendo a classe `content`).

Exemplo de uso:

```html
<div class="br-tag tag-input-close">
    <div class="content">
        <div class="icon"><i class="fa fa-car"></i></div>
        <span>Mitsubishi Outlander</span>
    </div>
    <div class="close">
        <button type="button">
            <i class="fas fa-times"></i><span class="sr-only">Fechar</span>
        </button>
    </div>
</div>
```

## Tag de Escolha

Nos conjuntos que contêm pelo menos duas opções, os Tags de escolha representam uma única seleção ou seja, permitem a seleção de um único Tag dentre um conjunto de opções. Funcionam também como alternativa para botões, botões de opção e menus de seleção única.

Aplicar a classe `br-tag-list`.

Exemplo de uso:

```html
<div class="br-tag-list">
    <button class="br-tag">
        <div class="content"><span>Alta Prioridade</span></div>
    </button>
    <button class="br-tag">
        <div class="content"><span>Baixa Prioridade</span></div>
    </button>
</div>
```

## Tag de Filtro

Representam filtros para uma coleção usando palavras descritivas, que delineiam e exibem claramente as opções em uma área compacta. São uma boa alternativa para alternar botões ou caixas de seleção.

Aplicar a classe `br-tag-filter`.

Exemplo de uso:

```html
<div class="br-tag-filter">
    <button class="br-tag">
        <div class="content">
            <div class="icon"><i class="fas fa-check"></i></div>
            <span>Modelo de Automóvel</span>
        </div>
    </button>
    <button class="br-tag">
        <div class="content">
            <div class="icon"><i class="fas fa-check"></i></div>
            <span>Tipo de Combustível</span>
        </div>
    </button>
</div>
```

## Tag de Ação

Oferecem ações relacionadas ao conteúdo principal. Eles devem aparecer dinamicamente e contextualmente em uma interface do usuário.

Podem ser usados como uma alternativa aos botões, que devem aparecer de forma persistente e consistente.

Aplicar a classe `br-tag`.

Exemplo de uso:

```html
<div class="br-tag">
    <div class="content">
        <div class="icon"><i class="fa fa-car"></i></div>
        <span>Mitsubishi Outlander</span>
    </div>
</div>
```

# Estados

Este componente apresenta os seguintes estados:

-   interativo: estado padrão do componente.
-   selecionado: aplicado automaticamente quando se pressiona o componente.
-   hover: aplicado automaticamente via hover/focus na aba.
-   desativado: indica que o componente não está interativo. Para utilizar este estado, é necessário aplicar a classe `br-tag-disabled` em conjunto com a classe container `br-tag`

```html
<div class="br-tag disabled"></div>
```

# Regras especiais

Nenhuma regra especial.
