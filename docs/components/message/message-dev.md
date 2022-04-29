[version]: # '11.2.0'

## Como usar

### Mensagem padrão

```html
<div class="br-message danger" role="alert">
    <div class="icon" aria-label="informações erradas">
        <i class="fas fa-times-circle fa-lg" aria-hidden="true"></i>
    </div>
    <div class="content">
        <strong>Data de início do afastamento inválida.</strong>
        <p>A data não pode ser superior à data atual.</p>
    </div>
    <div class="close">
        <button
            class="br-button circle small"
            type="button"
            aria-label="Fechar"
        >
            <i class="fas fa-times" aria-hidden="true"></i>
        </button>
    </div>
</div>
```

### Mensagem contextual

```html
<span class="feedback danger" role="alert">
    <i class="fas fa-times-circle" aria-hidden="true"></i>
    O CPF deve conter apenas dígitos.
</span>
```

### Configurações obrigatórias

| Elemento       | Tipo      | Descrição                             |
| -------------- | --------- | ------------------------------------- |
| `br-message`   | classe    | Container para Mensagem padrão        |
| `feedback`     | classe    | Container para Mensagem Contextual    |
| `role="alert"` | attributo | Mantém a acessibilidade do componente |

### Configurações Adicionais

| Elemento   | Tipo   | Descrição                 |
| ---------- | ------ | ------------------------- |
| `danger` | classe | Aplicar estado de Erro |
| `success` | classe | Aplicar estado de Sucesso |
| `info` | classe | Aplicar estado de Informação |
| `warning` | classe | Aplicar estado de Alerta |

## Acessibilidade

-   Ícones decorativos precisam ter o atributo `aria-hidden="true"`
-   Para os elementos que possuam somente ícone como conteúdo use o atributo `aria-label` manter a acessibilidade.

## Dependências

- [Button](/components/button)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbr-ds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbr-ds/dist/govbr-ds.min.js"></script>
```

> O arquivo govbr-ds.min.js expõe um objeto chamado `govbr-ds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRMessage`, passando os seguintes parâmetros:

- Nome da classe (br-message)
- Objeto referenciando a raiz do componente DOM

```javascript

const alertList = []
for (const brAlert of window.document.querySelectorAll('.br-message')) {
  alertList.push(new govbr-ds.BRAlert('br-message', brAlert))
}

```
