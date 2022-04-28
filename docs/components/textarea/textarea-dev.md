[version]: # (2.0.5)

## Como usar

```html
<div class="br-textarea large">
    <label for="textarea-id1">Label</label>
    <textarea id="textarea-id1" placeholder="Exemplo de textarea simples" rows="5" cols="5" maxlength="300"></textarea>
    <div class="text-base mt-1">
        <span class="limit">Limite máximo de <strong>300</strong> caracteres</span>
        <span class="current"></span>
    </div>
</div>
```

### Configurações obrigatórias

| Elemento      | Tipo   | Descrição                 |
| ------------- | ------ | ------------------------- |
| `br-textarea` | classe | container do componente   |
| `textarea`    | tag    | caixa de entrada de dados |

### Configurações Adicionais

| Elemento     | Tipo      | Descrição                                      |
| ------------ | --------- | ---------------------------------------------- |
| `label`      | tag       | label do textarea                              |
| `feedback`   | classe    | mensagem de feedback                           |
| `text-base`  | classe    | texto auxiliar do textarea                     |
| `max-length` | parametro | define a quantidade máxima de caracteres       |
| `limit`      | classe    | exibe o máximo de caracteres permitido         |
| `current`    | classe    | exibe a quantidade de caracteres restante      |
| `characters` | classe    | exibe a quantidade de caracteres já utilizados |

## Densidades

| Elemento | Tipo   | Descrição                       |
| -------- | ------ | ------------------------------- |
| `small`  | classe | tamanho pequeno(densidade alta) |
| `large`  | classe | tamanho grande(densidade baixa) |

## Estados

| Estado     | Tipo     | Descrição                                           |
| ---------- | -------- | --------------------------------------------------- |
| `success`  | class    | Entrada de dados com sucesso                        |
| `danger`   | class    | Entrada de dados com erros                          |
| `warning`  | class    | Entrada de dados com alerta                         |
| `info`     | class    | Entrada de dados com informação                     |
| `disabled` | atributo | Desativa o componente (aplicar no textarea interno) |

## Dependências

- [Message](/components/message)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbr-ds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbr-ds/dist/govbr-ds.min.js"></script>
```

> O arquivo govbr-ds.min.js expõe um objeto chamado `govbr-ds` contendo as referências para todas as classes exportadas.

### Javascript

Usar o seguinte código JavaScript para instanciar a classe `brTextArea`, passando os seguintes parâmetros:

- Nome da classe (br-textarea)
- Objeto referenciando a raiz do componente DOM

```javascript
const textareaList = []
for (const brTextArea of window.document.querySelectorAll('.br-textarea')) {
  textareaList.push(new govbr-ds.BRTextArea('br-textarea', brTextArea))
}
```
