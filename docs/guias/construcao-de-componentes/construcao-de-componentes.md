Os templates foram desenvolvimdos usando a linguagem de templates Pug - <https://pugjs.org/api/getting-started.html>. Eles são compilados para HTML. Para os estilos foi usado o SASS - <https://sass-lang.com/>. Eles são compilados para CSS.

Abra o terminal e faça um clone do projeto:

```bash
git clone git@git.serpro:ds-gov/design-system.git
cd design-system
npm install
```

Para iniciar o desenvolvimento execute comando `npm start` no terminal.

Será aberto automaticamente no Browser o endereço <http://localhost:9000>. Você poderá visualizar os arquivos compilados neste endereço.

## Exemplo prático

> Recomendamos o uso do editor de texto **Visual Studio Code** (<https://code.visualstudio.com>), mas você poderá usar qualquer outro de sua preferência.

Um componente deve obedecer a seguinte estrutura:

```text
design-system/
└── src/
    ├── js/
    │   └── components/
    │       └── componente-novo.js
    ├── pug/
    │   ├── components/
    │   │   └── componente-novo.pug
    │   ├── layouts/
    │   │   └── default.pug (incluir o novo componente na lista de componentes)
    │   └── views/
    │       └── components/
    │           └── componente-novo.pug
    └── scss/
        ├── components/
        │   └── _componente-novo.scss
        └── _components.scss (incluir o novo componente na lista de componentes)
```

No exemplo a seguir iremos criar um botão simples. Com as seguintes características:

-   cor de fundo: color-secondary-09
-   cor de texto: color-secondary-01
-   letras maiúsculas
-   quadrado
-   ao clicar é exibida a mensagem: "Botão clicado!"

### Código reusável

Escrever o componente de forma reusável facilita a interação dele com outros componentes ou templates. A ideia é criar um **mixin** para ser reusado quando necessário.

Dentro de `src/pug/components/` crie o arquivo **simple-button.pug** com o seguinte código:

```pug
mixin simple-button
    button.br-simple-button(
        id=attributes.id
        class=attributes.class
        type="button"
        disabled=attributes.disabled
    )
        if block
            block
```

Para mais informações sobre mixins em Pug acesse <https://pugjs.org/language/mixins.html>.

Inclua o novo mixin na listagem de componentes em `src/pug/layouts/default.pug`:

```pug
...
block components
    ...
    include ../components/simple-button
```

### View básica

Dentro de `src/pug/views/components/` crie o arquivo **simple-button.pug** com o seguinte código:

```pug
extends ../../layouts/component

append vars
    - var title = "Botão simples"

append content
    +simple-button Botão simples
    +simple-button#botao.py-3 Botão com Id e classes
    +simple-button.py-3(disabled) Botão desativado
```

### Estilo básico

Dentro de `src/scss/components/` crie o arquivo **\_simple-button.scss** com o seguinte código:

```scss
.#{$prefix}simple-button {
    background: v(color-secondary-09);
    border: 1px solid v(color-secondary-09);
    border-radius: 0;
    color: v(color-secondary-01);
    display: inline-block;
    padding: 8px 16px;
    text-transform: uppercase;
    &:hover {
        background: v(color-secondary-07);
        color: v(color-secondary-01);
        text-decoration: none;
    }
}
```

Incluir o novo componente na lista de componentes em `src/scss/_components.scss`:

```scss
@import 'components/simple-button';
```

Atenção! Da mesma forma como foi feito no arquivo Pug, você poderá criar um mixin SASS para reúso de código, neste caso o arquivo deverá ser criado em `src/scss/mixins/` e incluído da lista de mixins em `src/scss/_mixins.scss`.

### Comportamento básico

Dentro de `src/js/components/` crie o arquivo **simple-button.js** com o seguinte código:

```js
const simpleButtons = document.querySelectorAll('.br-simple-button');

for (let simpleButton of simpleButtons) {
    simpleButton.addEventListener('click', function() {
        alert('Botão clicado!');
    });
}
```

Confira o novo componente em <http://localhost:9000/components/>.
