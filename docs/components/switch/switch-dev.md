[version]: # (1.0.3)

## Como usar

```html
<div class="br-switch medium">
    <input id="switch-01" type="checkbox" checked>
    <label for="switch-01">Label</label>
</div>
```

### Configurações obrigatórias

| Elemento          | Tipo     | Descrição                      |
| ----------------- | -------- | ------------------------------ |
| `br-switch`       | classe   | Container do componente        |
| `type="checkbox"` | atributo | Tipo obrigatório para checkbox |
| `input`           | tag      | Conteúdo do componente         |
| `label`           | tag      | Rótulo do componente           |

### Configurações Adicionais

| Elemento        | Tipo     | Descrição                                 |
| --------------- | -------- | ----------------------------------------- |
| `icon`          | classe   | Usado para switch com ícone               |
| `small`         | classe   | Aplica a Densidade Alta                   |
| `medium`        | classe   | Aplica a Densidade Média                  |
| `large`         | classe   | Aplica a Densidade Baixa                  |
| `switch-data`   | classe   | Usado para rótulos adicionais             |
| `data-enabled`  | atributo | Usado para habilitar o rótulo adicional   |
| `data-disabled` | atributo | Usado para desabilitar o rótulo adicional |

**Atenção**!
A densidade do switch padrão é a média, utilizando a classe `medium`.

## Estados

| Estado     | Tipo     | Descrição                   |
| ---------- | -------- | --------------------------- |
| `checked`  | atributo | Padrão habilitado no switch |
| `disabled` | atributo | Desativa o componente       |
