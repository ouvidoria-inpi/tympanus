# wizard

O Componente de wizard  permite que seu aplicativo aceite um valor de texto potencialmente longo do usuário.


## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-wizard">
    <label for="wizard">Label</label>
    <div id="wizard" placeholder="Exemplo de wizard"></div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

- `br-wizard`: container do componente
- `<div>`: caixa de entrada de dados
- `<label>`: tag html de rótulo

# Estados

Este componente apresenta os seguintes estados:

- focus
- valid
- invalid
- disabled

Estados podem ser aplicados diretamente usando o prefixo `is-` ao container do componente.

Exemplo de uso:

```html
<div class="br-wizard is-focus">
  <label for="wizard">Label</label>
    <div id="wizard" placeholder="Exemplo de Focus"></div>
</div>
```

# Regras especiais

Nenhuma regra especial.
