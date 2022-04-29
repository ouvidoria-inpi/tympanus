[version]: # (1.1.4)

## Como usar

```html
<div class="br-notification">
    <div class="notification-header">...</div>
    <div class="notification-body">
        <div class="br-tabs">
            <nav class="tab-nav">...<div>
            <div class="tab-content">...</div>
        </div>
    </div>
</div>
```

### Configurações obrigatórias

| Elemento          | Tipo   | Descrição               |
| ----------------- | ------ | ----------------------- |
| `br-notification` | classe | Container do componente |

### Elementos opcionais

| Elemento              | Descrição                |
| --------------------- | ------------------------ |
| `notification-header` | Cabeçalho da notificação |

## Dependências

- [Button](/components/button)
- [Item](/components/item)
- [List](/components/list)
- [Tab](/components/tab)
- [Tag](/components/tag)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbrds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbrds/dist/govbrds.min.js"></script>
```

> O arquivo govbrds.min.js expõe um objeto chamado `govbrds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRNotification`, passando os seguintes parâmetros:

- Nome da classe (br-notification)
- Objeto referenciando a raiz do componente DOM

```javascript

const notificationList = []
for (const govbr-dsNotification of window.document.querySelectorAll(
  '.br-notification'
)) {
  notificationList.push(new govbrds.BRNotification('br-notification', brNotification))
}
```
