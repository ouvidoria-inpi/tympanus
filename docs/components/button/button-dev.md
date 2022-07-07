[version]: # (16.1.3)

## Como usar

### Botão padrão

```html
<button class="br-button" type="button">Rótulo</button>
```

### Botão circular

```html
<button class="br-button circle" type="button" aria-label="Ícone ilustrativo">
    <i class="fas fa-city" aria-hidden="true"></i>
</button>
```

### Botão bloco

O Botão bloco é uma configuração que faz o botão ocupar 100% do contexto atual. Ele pode ser ativado ou desativado por breakpoint conforme a tabela abaixo.

| Elemento   | Descrição                                               |
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

### Configurações obrigatórias

| Elemento    | Tipo   | Descrição               |
| ----------- | ------ | ----------------------- |
| `br-button` | classe | Container do componente |

### Configurações Adicionais

| Elemento    | Tipo   | Descrição                  |
| ----------- | ------ | -------------------------- |
| `circle`    | classe | Aplica o Tipo Circular.    |
| `primary`   | classe | Aplica a Ênfase Primária   |
| `secondary` | classe | Aplica a Ênfase Secundária |
| `large`     | classe | Aplica a Densidade Baixa   |
| `small`     | classe | Aplica a Densidade Alta    |
| `inverted`  | classe | Aplicar em fundos escuros  |

> **Atenção**! A configuração padrão do botão é ênfase terciária e densidade média

## Acessibilidade

-   Ícones decorativos precisam ter o atributo `aria-hidden="true"`
-   O **Botão Circular** precisa de texto alternativo para o ícone decorativo. Inclua o atributo `aria-label="texto alternativo"` no componente

## Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado     | Tipo     | Descrição             |
| ---------- | -------- | --------------------- |
| `disabled` | atributo | Desativa o componente |
| `active`   | classe   | Aplica ativado        |
| `loading`  | classe   | Aplica carregando     |
