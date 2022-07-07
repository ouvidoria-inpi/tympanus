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

- [Button](/ds/components/button)
- [Item](/ds/components/item)
- [List](/ds/components/list)
- [Tab](/ds/components/tab)
- [Tag](/ds/components/tag)

## Instanciação do Componente

### HTML

Incluir o arquivo `dsgov.min.js` no html.

```html
<script src="<node_modules>/@govbr/dsgov/dist/dsgov.min.js"></script>
```

> O arquivo dsgov.min.js expõe um objeto chamado `dsgov` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRNotification`, passando os seguintes parâmetros:

- Nome da classe (br-notification)
- Objeto referenciando a raiz do componente DOM

```javascript

const notificationList = []
for (const dsgov.brNotification of window.document.querySelectorAll(
  '.br-notification'
)) {
  notificationList.push(new dsgov.BRNotification('br-notification', brNotification))
}
```
