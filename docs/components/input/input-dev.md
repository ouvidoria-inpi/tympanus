[version]: # (15.1.2)

## Como usar

### Input padrão

```html
<div class="br-input">
  <label for="identificador">Rótulo</label>
  <input id="identificador" type="text">
</div>
```

### Input com botão

```html
<div class="br-input input-button">
  <label for="identificador">Rótulo</label>
  <input id="identificador" type="password">
  <button class="br-button" type="button" aria-label="Descrição do botão">
    <i class="fas fa-eye" aria-hidden="true"></i>
  </button>
</div>
```

-   Aplicar classe `.input-button` sempre que houver botão interno

### Input com ícone

```html
<div class="br-input">
  <label for="identificador">Rótulo</label>
  <div class="input-group">
    <div class="input-icon">
      <i class="fas fa-user-tie" aria-hidden="true"></i>
    </div>
    <input id="identificador" type="text">
  </div>
</div>
```

-   Colocar o ícone em `input-icon`
-   Agrupar ícone e input em `input-group`

### Input com rótulo lateral

```html
<div class="br-input input-inline">
  <div class="input-label">
    <label class="text-nowrap" for="identificador">Rótulo</label>
  </div>
  <div class="input-content">
    <input id="identificador" type="text">
  </div>
</div>
```

-   Aplicar classe `.input-inline` ao componente
-   Colocar o label em `input-label`
-   Agrupar outros elementos em `input-content`

### Propriedade obrigatórias

| Atributo   | Tipo   | Descrição                 |
| ---------- | ------ | ------------------------- |
| `br-input` | classe | container do componente   |
| `label`    | tag    | label do input            |
| `input`    | tag    | caixa de entrada de dados |

### Propriedades adicionais

| Atributo           | Tipo   | Descrição                           |
| ------------------ | ------ | ----------------------------------- |
| `.input-button`    | classe | Ajusta espaçamento interno do input |
| `.input-inline`    | classe | Usado na versão com rótulo lateral  |
| `.input-highlight` | classe | Aplica versão em destaque           |
| `.small`           | classe | Aplica alta densidade               |
| `.large`           | classe | Aplica baixa densidade              |

## Estados

| Estado     | Tipo     | Descrição                                         |
| ---------- | -------- | ------------------------------------------------- |
| `success`  | class    | Entrada de dados com sucesso                      |
| `danger`   | class    | Entrada de dados com erros                        |
| `warning`  | class    | Entrada de dados com alerta                       |
| `info`     | class    | Entrada de dados com informação                   |
| `disabled` | atributo | Desativa o componente (**usar no input interno**) |

## Próximos passos

-   Não planejado: A necessidade foi identificada, mas ainda não tem data para ser satisfeita.
-   Fazendo: A equipe está trabalhando na necessidade.
-   Feito: Necessidade já é satisfeita.

| Nome         | Documentação de Design | Desenvolvimento |
| ------------ | ---------------------- | --------------- |
| autocomplete | Feito                  | Não planejado   |

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

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRInput`, passando os seguintes parâmetros:

-   Nome da classe (br-input)
-   Objeto referenciando a raiz do componente DOM

```javascript
const inputList = []
for (const brInput of window.document.querySelectorAll('.br-input')) {
  inputList.push(new core.BRInput('br-input', brInput))
}
```
