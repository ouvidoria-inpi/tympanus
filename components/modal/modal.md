# Modal

Modais são diálogos flexíveis que podem conter informações críticas ou envolver decisões, tomadas pelo usuário, relacionadas a alguma tarefa.

## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h4 class="br-modal-title">Título</h4>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

- `br-modal`: container do componente
- `br-modal-dialog`: caixa de diálogo do modal (card).
- `br-modal-header`: caixa de cabeçaçho do modal.
- `br-modal-body`: caixa de conteúdo do modal.
- `br-modal-footer`: caixa de rodapé/ações do modal.

## Variações de tamanho

Estão disponíveis 4 tamanhos de modais. Cada tamanho é aplicado com o prefixo `is-`:

- Muito pequeno `is-xsmall`
- Pequeno `is-small`
- Medio `is-medium`
- Grande `is-large`

### Muito pequeno

O modal **Muito pequeno** ocupa o mínimo/máximo de 3 colunas (220px)

Exemplo de uso:

```html
<div class="br-modal is-xsmall">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h4 class="br-modal-title">Título</h4>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```

### Modal pequeno

O modal **Pequeno** ocupa o mínimo/máximo de 300px.

Exemplo de uso:

```html
<div class="br-modal is-small">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h4 class="br-modal-title">Título</h4>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```

### Modal médio

O modal **Médio** ocupa o mínimo/máximo de 500px.

Exemplo de uso:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h4 class="br-modal-title">Título</h4>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```
### Modal largo

O modal **Largo** ocupa o mínimo/máximo 8 colunas(640px).

Exemplo de uso:

```html
<div class="br-modal is-large">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h4 class="br-modal-title">Título</h4>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```

## Cabeçalho / Título

O modal pode ter ou não um **Cabeçalho / Título** de acordo com a necessidade. Para remover o cabeçalho/título de um modal basta remover o elemento `br-modal-header` e seu conteúdo, que possui o seguinte código:

```html
<div class="br-modal-header">
    <h4 class="br-modal-title">Título</h4>
</div>
```

Exemplo de modal sem cabeçalho:

```html
<div class="br-modal is-large">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```

## Modal com título contraído

O modal pode ter ou não um **Modal com título contraído** de acordo com a necessidade. Para que o modal tenha um título contraído deve ser aplicado a class `is-contracted`. Dessa forma os títulos do modal não poderão quebrar para um segunda linha. Títulos maiores que duas linhas serão contraídos com reticências, e ao passar o mouse sobre o texto contraído é revelado o texto completo pelo uso de um componente <a href="/componentes/tooltip">tooltip</a>.

Exemplo de modal com título contraído:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h4 class="br-modal-title is-contracted">Título do modal de exemplo com uso de uma linha</h4>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <p>Texto com uma linha Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-secondary is-small" type="button">Ação 1</button>
                <button class="br-button is-primary is-small" type="button">Ação 2</button>
            </div>
        </div>
    </div>
</div>
```



### Botão Call to Action



## Estados

### `focus` e `hover`

- São aplicados automaticamente no elemento
- Podem ser aplicados diretamente usando o prefixo `is-`

Exemplo de uso:

```html
<button class="br-button is-primary is-hover" type="button">Ação</button>
<button class="br-button is-primary is-focus" type="button">Ação</button>
```

### disabled

- Deve ser aplicado como propriedade no componente quando for tag do tipo `<button>` ou `<input>`
- Pode ser aplicado diretamente usando o prefixo `is-`, porém a aplicação por classe apenas modifica o estilo e não desabilita o componente de fato

Exemplo de uso:

```html
<button class="br-button is-primary" type="button" disabled>Ação desativada</button>
<a href="" class="br-button is-primary is-disabled">Ação</a>
```

### loading

- Sempre que necessário aplique o estado de `loading` nos botões para sinalizar ao usuário que o sistema está operando
- Este estado é recomendados para os tipos **Botão Primário**, **Botão Secundário**, **Botão Call to Action** e **Botão Circular**
- Deve ser aplicado diretamente no componente usando o prefixo `is-`

Exemplo de uso:

```html
<button class="br-button is-primary is-loading" type="button">Ação</button>
```

## Regras especiais

Em _smartphones_ o botão terá a largura da tela. Será aplicado espaçamento vertical automático de 16px entre eles.

Nos demais dispositivos os botões terão tamanho mínimo de 144px. Será aplicado espaçamento horizontal automático de 24px entre botões.

Botões dentro do elemento `actions` do componente `br-form` serão ordenados de forma inversa.
