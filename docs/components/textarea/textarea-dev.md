# TextArea

O Componente de TextArea  permite que seu aplicativo aceite um valor de texto potencialmente longo do usuário.


## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-textarea">
    <label for="textarea">Label</label>
    <textarea id="textarea" placeholder="Exemplo de TextArea"></textarea>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

- `br-textarea`: container do componente
- `<textarea>`: caixa de entrada de dados
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
<div class="br-textarea is-focus">
  <label for="textarea">Label</label>
    <textarea id="textarea" placeholder="Exemplo de Focus"></textarea>
</div>
```

# Regras especiais

Nenhuma regra especial.
