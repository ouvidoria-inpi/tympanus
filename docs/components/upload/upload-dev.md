[version]: # (7.2.7)

## Como usar

```html
<div class="br-upload">
    <label class="upload-label" for="upload">...</label>
    <input class="upload-input" id="upload" type="file" [multiple] />
    <div class="feedback">...</div>
    <div class="upload-list"></div>
</div>
<p class="text-base">Clique ou arraste os arquivos para cima do componente Upload.</p>
```

### Configurações obrigatórias

| Elemento       | Tipo   | Descrição                                        |
| -------------- | ------ | ------------------------------------------------ |
| `br-upload`    | classe | Container do componente                          |
| `upload-input` | classe | elemento oculto que comporta o envio de arquivos |
| `upload-label` | classe | label do input                                   |
| `upload-list`  | classe | container da Lista de arquivos adicionados       |

### Configurações Adicionais

| Elemento    | Tipo     | Descrição                                  |
| ----------- | -------- | ------------------------------------------ |
| `multiple`  | atributo | para inclusão de múltiplos arquivos \*     |
| `disabled`  | atributo | estado desabilitado                        |
| `feedback`  | classe   | mensagem de retorno(aviso, erro, sucesso). |
| `text-base` | classe   | mensagem de texto auxiliar                 |

**Atenção**!

Para poder incluir multiplos arquivos é preciso usar o atributo `multiple` no elemento "upload-input".

A função uploadTimeout() é um exemplo de que deve ser trocado na produção e retirar o timeout

## Estados

| Estado     | Descrição                                                                        |
| ---------- | -------------------------------------------------------------------------------- |
| `dropzone` | estado para soltar arquivo(s) ou clicar na área de upload para envio de arquivos |

## Dependências

-   [Button](/ds/components/button)
-   [Message](/ds/components/message)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

### Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRUpload`, passando os seguintes parâmetros:

-   Nome da classe (br-upload)
-   Objeto referenciando a raiz do componente DOM

```javascript
const uploadList = []

function uploadTimeout() {
  return new Promise((resolve) => {
    // Colocar aqui um upload para o servidor e retirar o timeout
    return setTimeout(resolve, 3000)
  })
}

for (const brUpload of window.document.querySelectorAll('.br-upload')) {
  uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
}
```
