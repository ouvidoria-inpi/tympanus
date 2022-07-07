[Version]: # (1.0.4)

## Como usar

### Padrão com porcentagem

```html
<div class="br-loading" data-progress="75" progress>
    <div class="br-loading-mask" full>
        <div class="br-loading-fill"></div>
    </div>
    <div class="br-loading-mask">
        <div class="br-loading-fill"></div>
    </div>
</div>
```

### Padrão sem porcentagem

```html
    <div class="loading medium"></div>
    <span class="rotulo">Carregando...</span>
```

### Elementos obrigatórios

| Elemento     | Tipo   | Descrição                                                                 |
| ------------ | ------ | ------------------------------------------------------------------------- |
| `br-loading` | classe | Container do componente                                                   |
| loading      | classe | Define um loading e tipo indeterminado com animação de rotação contínua * |

### Elementos Opcionais

| Elemento      | Tipo     | Descrição                                |
| ------------- | -------- | ---------------------------------------- |
| rotulo        | classe   | Conteúdo indicando carregamento          |
| data-progress | atributo | Indicação de porcentagem de carregamento |
| medium        | classe   | Tamanho padrão do loading                |

**Atenção**! Quando a classe loading for usada sem a classe medium, o tamanho do loading será pequeno.
