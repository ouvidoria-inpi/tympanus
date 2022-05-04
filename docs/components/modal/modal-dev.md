[Version]: # (2.1.4)

## Como usar

```html
<div class="br-modal is-medium">
    <div class="container-fluid p-4">
        <div class="br-modal-header">
            <div
                class="br-modal-title"
                title="Retornar para página inicial?"
            >
                Retornar para página inicial?
            </div>
            <button
                class="close"
                type="button"
                data-dismiss="br-modal"
                aria-label="Close"
            >
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
        </div>
        <div class="br-modal-body"></div>
        <p>
            Você está sendo redirecionado para a página inicial do sistema
        </p>
        <div class="br-modal-footer justify-content-end">
            <button class="br-button secondary small m-2" type="button">
                Ação 1
            </button>
            <button class="br-button primary small m-2" type="button">
                Ação 2
            </button>
        </div>
    </div>
</div>
```

### Configurações obrigatórias

| Elemento           | Tipo   | Descrição                             |
| ------------------ | ------ | ------------------------------------- |
| `br-modal`         | classe | container do componente               |
| `br-card`          | classe | container da superfície do componente |
| `br-modal- header` | classe | cabeçalho da modal                    |
| `br-modal-body`    | classe | corpo da modal                        |
| `br-modal-footer`  | classe | footer da modal(botões)               |

### Configurações Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Elemento         | Tipo   | Descrição                 |
| ---------------- | ------ | ------------------------- |
| `br-modal-title` | classe | título da modal           |
| `close`          | classe | botão de fechamento       |
| `br-button`      | classe | botão de ação             |
| `is-loading`     | classe | temporizador loading      |
| `terms`          | classe | modal com termo de aceite |

## Dependências

- [Button](/components/button)
- [Card](/components/card)
- [Loading](/components/loading)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbrds.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/govbrds.min.js"></script>
```

> O arquivo govbrds.min.js expõe um objeto chamado `govbrds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRModal`, passando os seguintes parâmetros:

- Nome da classe (br-modal)
- Objeto referenciando a raiz do componente DOM

```javascript

const modalList = []
for (const brModal of window.document.querySelectorAll('.br-modal')) {
  modalList.push(new govbrds.BRModal('br-modal', brModal))
}

```
