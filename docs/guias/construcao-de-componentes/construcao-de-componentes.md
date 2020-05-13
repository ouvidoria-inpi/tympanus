Faça um fork ou clone do projeto em <https://git.serpro/ds-gov/design-system>.

```bash
git clone git@git.serpro:ds-gov/design-system.git
cd design-system
npm run init
npm start
```

Veja a lista de componentes no endereço <http://localhost:9000/>.

Os códigos foram escritos usando a linguagem de templates Pug - <https://pugjs.org/api/getting-started.html>. Eles são compilados para HTML.

Para os estilos foi usado o SASS - <https://sass-lang.com/>. Eles são compilados para CSS.

## Regras

1. Componentes do Design System DEVEM ter prefixo **br-**
1. Variações deve ser aplicadas por classe ou atributo

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

---

## Exemplo prático

No exemplo a seguir iremos criar um botão simples. Com as seguintes características:

1. Fundo preto e texto branco
1. Letras maiúsculas
1. Quadrado
1. Tamanho padrão e pequeno
1. Ao clicar é exibida a mensagem: "Botão clicado!"

### Código reusável

Escrever o componente de forma reusável facilita a interação dele com outros componentes ou templates. A ideia é criar um **mixin** para ser reusado quando necessário.

**Mixin** pode ser criado tanto no SASS quanto no Pug.

-   Veja a documentação de mixin para Pug em <https://pugjs.org/language/mixins.html>
-   Veja a documentação de mixin para SASS em <https://sass-lang.com/documentation/at-rules/mixin>

Dentro de `src/pug/components/` crie o arquivo **simple-button.pug** com o seguinte código:

```pug
//- src/pug/components/simple-button.pug
mixin simple-button
    button.br-simple-button(type="button")&attributes(attributes)
        if block
            block
```

Inclua o novo mixin na listagem de componentes em `src/pug/layouts/default.pug` :

```pug
//- src/pug/layouts/default.pug
block components
    include ../components/simple-button
```

### View básica

Dentro de `src/pug/views/components/` crie o arquivo **simple-button.pug** com o seguinte código:

```pug
//- src/pug/views/components/simple-button.pug
extends ../../layouts/component

append vars
    - var title = "Botão simples"

append content
    +simple-button Botão simples
    +simple-button#botao.py-3 Botão com Id e classes
    +simple-button.py-3()(disabled) Botão desativado
```

### Estilo básico

Dentro de `src/scss/components/` crie o arquivo **\_simple-button.scss** com o seguinte código:

```scss
// src/scss/components/_simple-button.scss
.#{$prefix}simple-button {
    background: $color-black;
    border: 1px solid $color-black;
    border-radius: 0;
    color: $color-white;
    display: inline-block;
    font-weight: 400;
    padding: 8px 16px;
    text-transform: uppercase;
    &:hover {
        background: $color-gray-6;
        color: $color-white;
        text-decoration: none;
    }
    &.small,
    &[small] {
        padding: 4px 8px;
    }
}
```

Incluir o novo componente na lista de componentes em `src/scss/_components.scss` :

```scss
// src/scss/components/_components.scss
@import 'components/simple-button';
```

Atenção! Da mesma forma como foi feito no arquivo Pug, você poderá criar um mixin SASS para reúso de código, neste caso o arquivo deverá ser criado em `src/scss/mixins/` e incluído da lista de mixins em `src/scss/_mixins.scss` .

### Comportamento básico

Dentro de `src/js/components/` crie o arquivo **simple-button.js** com o seguinte código:

```js
const simpleButtons = document.querySelectorAll('.br-simple-button')

for (let simpleButton of simpleButtons) {
    simpleButton.addEventListener('click', function() {
        alert('Botão clicado!')
    })
}
```
