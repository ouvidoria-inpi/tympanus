[version]: # (16.1.3)

## Como usar

### Propriedades obrigatórias

| Atributo | Tipo   | Valor Padrão  | Descrição                |
| -------- | ------ | ------------- | ------------------------ |
| class    | string | **br-button** | Container do componente. |

### Propriedades adicionais

| Atributo | Tipo   | Valor Padrão                 | Descrição               |
| -------- | ------ | ---------------------------- | ----------------------- |
| class    | string | **primary** ou **secondary** | Modifica a ênfase.      |
| class    | string | **circle** ou **block**      | Modifica o tipo.        |
| class    | string | **large** ou **small**       | Modifica a densidade.   |
| class    | string | **dark-mode**                | Usar em fundos escuros. |

### Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado     | atributo   | Valores |
| ---------- | ---------- | ------- |
| Desativado | `disabled` |         |
| Ativado    | `class`    | active  |
| Carregando | `class`    | loading |

## Informações adicionais

### Botão bloco

O Botão bloco é uma configuração que faz o botão ocupar 100% do contexto atual.

Ele pode ser ativado ou desativado por breakpoint conforme a tabela abaixo.

| classe     | Descrição                                               |
| ---------- | ------------------------------------------------------- |
| `block`    | Aplica o Botão bloco para qualquer breakpoint           |
| `block-sm` | Aplica o Botão bloco a partir de `--grid-breakpoint-sm` |
| `block-md` | Aplica o Botão bloco a partir de `--grid-breakpoint-md` |
| `block-lg` | Aplica o Botão bloco a partir de `--grid-breakpoint-lg` |
| `block-xl` | Aplica o Botão bloco a partir de `--grid-breakpoint-xl` |
| `auto-sm`  | Remove o Botão bloco a partir de `--grid-breakpoint-sm` |
| `auto-md`  | Remove o Botão bloco a partir de `--grid-breakpoint-md` |
| `auto-lg`  | Remove o Botão bloco a partir de `--grid-breakpoint-lg` |
| `auto-xl`  | Remove o Botão bloco a partir de `--grid-breakpoint-xl` |

Você pode usar a grid para controlar a largura do Botão bloco se houver necessidade. Exemplo:

```html
<div class="row">
    <div class="col-md-10">
        <button class="br-button block" type="button">Ação</button>
    </div>
</div>
```

### Acessibilidade

-   Ícones decorativos precisam ter o atributo `aria-hidden="true"`
-   O **Tipo Circular** precisa de texto alternativo para o ícone decorativo. Inclua o atributo `aria-label` no componente
