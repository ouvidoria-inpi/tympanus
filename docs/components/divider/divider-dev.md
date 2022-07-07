[version]: # (1.2.0)

## Como usar

```html
<span class="br-divider"></span>
```

### Propriedades obrigatórias

| Atributo | tipo   | Valor padrão | Descrição               |
| -------- | ------ | ------------ | ----------------------- |
| class    | string | br-divider   | Container do componente |

### Propriedades Adicionais

| Atributo | tipo   | Valor padrão | Descrição                    |
| -------- | ------ | ------------ | ---------------------------- |
| class    | string | vertical     | Aplica versão vertical       |
| class    | string | dashed       | Aplica versão tracejado      |
| class    | string | sm           | Aplica tamanho 2x            |
| class    | string | md           | Aplica tamanho 3x            |
| class    | string | lg           | Aplica tamanho 4x            |

**Atenção!**

- Use os utilitários de CSS para aplicação de margens ou controle de visibilidade de breakpoints
- A versão vertical só funciona quando o elemento pai tiver `display: flex`
- As classes vertical, dashed e sm ou md ou lg podem ser utilizadas em conjunto para obter o resultado desejado
