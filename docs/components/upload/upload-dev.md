## Dependências

-   Script upload.js

## Código básico

```html
<div class="br-upload">
    <label class="upload-label" for="upload">...</label>
    <input class="upload-input" id="upload" type="file" [multiple] />
    <button class="br-button upload-button" type="button">...</button>
    <div class="feedback">...</div>
    <div class="upload-list"></div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

-   **br-upload**: container do componente
-   **upload-input**: elemento oculto que comporta o envio de arquivos
-   **upload-label**: label oculta do input
-   **upload-button**: botão para adicionar arquivos
-   feedback: mensagem de retorno (opcional)
-   **upload-list**: container para a Lista de arquivos adicionados

# Regras especiais

Para poder incluir multiplos arquivos é preciso usar o atributo `multiple` no elemento "upload-input".

A função uploadTimeout() é um exemplo de que deve ser trocado na produção e retirar o timeout
