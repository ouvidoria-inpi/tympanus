[version]: # (1.1.4)

## Como usar

### Propriedades obrigatórias

| Atributo | Tipo   | Valor padrão        | Descrição               |
| -------- | ------ | ------------------- | ----------------------- |
| class    | string | **br-notification** | Container do componente |

### Propriedades adicionais

| Atributo | Tipo   | Valor Padrão            | Descrição                |
| -------- | ------ | ----------------------- | ------------------------ |
| class    | string | **notification-header** | Cabeçalho da notificação |

## Dependências

-   [Button](/ds/components/button)
-   [Item](/ds/components/item)
-   [List](/ds/components/list)
-   [Tab](/ds/components/tab)
-   [Tag](/ds/components/tag)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRNotification`, passando os seguintes parâmetros:

-   Nome da classe (br-notification)
-   Objeto referenciando a raiz do componente DOM

```javascript

const notificationList = []
for (const govbr-dsNotification of window.document.querySelectorAll(
  '.br-notification'
)) {
  notificationList.push(new core.BRNotification('br-notification', brNotification))
}
```
