## Dependências

Nenhuma dependência.

## Código básico

``` html
<button class="br-button" type="button">
    Button
</button>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

* `br-button` : container do componente

## Variações

Estão disponíveis 10 tipos de botões. Cada tipo é aplicado com o prefixo `is-` .

3 para uso comum:

* Primário
* Secundário
* Terciário

7 para uso específico:

* Call to Action
* Circular
* Redes Sociais
* Voltar ao Topo
* Filtrar
* Loading
* Web Mini

### Button Primário

Toda **ação principal** na tela deve usar o **Button Primário**.

NUNCA use mais de 1 Button Primário, pois confunde o usuário em sua tomada de decisão.

Exemplo de uso:

``` html
<button class="br-button is-primary" type="button">
    Ação
</button>
```

### Button Secundário

Para **ações subjetivas** ou de **menor importância** use **Button Secundário**. Este botão PODE ser usado quantas vezes forem necessárias na tela.

Exemplo de uso:

``` html
<button class="br-button is-secondary" type="button">
    Ação
</button>
```

### Button Terciário

Nas situações em que o botão deverá se comportar como um **link** use o **Button Terciário**.

Exemplo de uso:

``` html
<button class="br-button is-tertiary" type="button">
    Ação
</button>
```

### Button Call to Action(Web e Mobile)

Usado em situações que necessitem atenção especial. Ele é diferente do Button Primário.

Exemplo de uso:

Web

``` html
<button class="br-button is-call-to-action" type="button">
    Ação
</button>
```

Mobile

``` Html
  <button class="br-button is-circle is-large is-call-to-action is-mobile" type="button"><i class="fas fa-plus"></i>
  </button>
```

### Button Circular

Use apenas ícones nestes botões.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">` .

Imagens serão redimencionadas automaticamente dentro do botão. Nos ícones do Fontawesome use **cor primária** ou **cor secundária**.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

``` html
<button class="br-button is-circle" type="button">
    <img class="icon" src="image.png" alt="Texto descritivo" />
</button>
<button class="br-button is-circle is-primary" type="button">
    <i class="fas fa-chevron-up"></i>
</button>
<button class="br-button is-circle is-secondary" type="button">
    <i class="fas fa-chevron-down"></i>
</button>
```

### Button Redes Sociais

Botões para login com redes sociais. A regra é a mesma dos botões circulares.

A maioria dos ícones de redes sociais podem ser encontrados no Fontawesome. Para ícones mais complexos, como o do Google, use imagem.

Exemplo de uso:

``` html
<button class="br-button is-social-media is-facebook" type="button">
    <i class="fab fa-facebook-f fa-lg"></i>
</button>
<button class="br-button is-social-media is-twitter" type="button">
    <i class="fab fa-twitter fa-lg"></i>
</button>
<button class="br-button is-social-media" type="button">
    <img src="imagem" alt="Texto descritivo" />
</button>
```

### Button Voltar ao Topo

Usado geralmente ao final de conteúdos para facilitar a rolagem de tela.

Um script deve ser aplicado ao botão para realizar a ação.

Exemplo de uso:

``` html
<button class="br-button is-go-top" type="button" onclick="topFunction()">
    Voltar ao topo
    <span class="br-button is-circle is-primary">
        <i class="fas fa-chevron-up"></i>
    </span>
</button>
<script>
    function topFunction() {
        document.body.scrollTop = 0 // Safari
        document.documentElement.scrollTop = 0 // Chrome, Firefox, IE, Opera
    }
</script>
```

### Button Filtrar

Usado especial para uso de filtros. Devemos usar a classe `is-filter` .

Exemplo de uso:

``` html
<button class="br-button is-filter" type="button">
    Filtrar
    <i class="fas fa-sliders-h"></i>
</button>
```

### Button Loading

Button usado para indicar que algum processo em segundo plano está sendo executado.
A classe a ser usada é `is-loading` .

Exemplo de uso: 

``` Html
<button class="br-button is-primary is-loading" type="button">
</button>
```

Ou para botão Call to Action

``` Html
<button class="br-button is-call-to-action is-loading" type="button">
</button>
```

### Button Web Mini

São usados em locais com espaço reduzidos, como cards, botão sair presente nos cabeçalhos.
Devemos usar a classe `is-small` .

Exemplo de uso:

``` Html
  <button class="br-button is-primary is-small" type="button">
      Entrar
  </button>
```

## Estados

### `focus` e `hover` 

* São aplicados automaticamente no elemento
* Podem ser aplicados diretamente usando o prefixo `is-` 

Exemplo de uso:

``` html
<button class="br-button is-primary is-hover" type="button">
    Ação
</button>

<button class="br-button is-primary is-focus" type="button">
    Ação
</button>
```

### disabled

* Deve ser aplicado como propriedade no componente quando for tag do tipo `<button>` ou `<input>` 
* Pode ser aplicado diretamente usando o prefixo `is-` , porém a aplicação por classe apenas modifica o estilo e não desabilita o componente de fato

Exemplo de uso:

``` html
<button class="br-button is-primary" type="button" disabled>
    Ação desativada
</button>

<a href="" class="br-button is-primary is-disabled">Ação</a>
```

## Regras especiais

Essa regra deve ser aplicada apenas nas versões menores e circulares dos botões `Call to Action` e `loading` , no caso específico de aparelhos mobile.
Usa-se a classe `is-circle is-large is-mobile` 

Exemplo de uso:

``` Html
<button class="br-button is-circle is-large is-call-to-action is-mobile  is-loading" type="button">
</button>
```

``` Html
  <button class="br-button is-circle is-large is-call-to-action is-mobile" type="button"><i class="fas fa-plus"></i>
  </button>
```

