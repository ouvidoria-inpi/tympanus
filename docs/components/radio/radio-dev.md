[version]: # (6.1.3)

## Como usar

```html
<div class="br-radio [disabled|invalid|valid] [d-inline-block]" name="grupo">
    <input id="identificador" type="radio" [disabled] />
    <label for="identificador">Label do componente</label>
</div>
```

### Elementos obrigatórios

| Elemento    | Tipo     | Descrição                       |
| ----------- | -------- | ------------------------------- |
| `.br-radio` | classe   | Container do componente         |
| `input`     | tag html | Input do tipo "radio"           |
| `label`     | tag html | Rótulo do Radio                 |
| `name`      | atributo | identificador de grupo de Radio |

### Elementos e atributos opcionais

| Elemento          | Tipo   | Descrição                                   |
| ----------------- | ------ | ------------------------------------------- |
| `.d-inline-block` | classe | Formata o componente para versão horizontal |

## Estados

| Elemento   | Tipo     | Descrição                                                         |
| ---------- | -------- | ----------------------------------------------------------------- |
| `disabled` | atributo | Desabilita o componente                                           |
| `invalid`  | atributo | Formata a versão inválida para o componente (usado em validações) |
| `valid`    | atributo | Formata a versão válida para o componente (usado em validações)   |
