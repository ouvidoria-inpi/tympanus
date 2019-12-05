## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-form">
  <div class="field">...</div>
  <div class="field">...</div>
  <div class="field">...</div>
  <div class="actions">...</div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-form`: container do componente
- `field`: linha agrupadora para entrada de dados
- `actions`: agrupador de botões de ação

## `field`

**Elemento obrigatório**!

Para cada linha de formulário DEVE ser criado um `field`.

Este elemento dá suporte a alguns componentes de forma simplificada.

Isso não exclui usar a versão original de cada componente. Ambos os formatos são suportados.

### Componente Input básico

Original -> `br-input`. Versão simplificada -> `input`.

Exemplo de uso:

```html
<div class="br-form">
  <div class="field">
    <div class="input">
      <label for="input-base">Input básico</label>
      <input id="input-base" type="text" placeholder="Texto de exemplo" />
    </div>
  </div>
  <div class="actions">...</div>
</div>
```

Você PODE usar `feedback` e `help` nesta versão simplificada.

Atenção! A versão simplificada não é compatível com **Input com botão de ação** e **Input com autocomplete**.

### Componente Checkbox

Original --> `br-check`. Versão simplificada --> `check`.

Exemplo de uso:

```html
<div class="br-form">
  <div class="field">
    <!-- Checkbox -->
    <div class="check">
      <input type="checkbox" id="checkbox-padrao" />
      <label for="checkbox-padrao">Padrão</label>
    </div>
    <!-- Radio button -->
    <div class="check">
      <input name="radio" type="radio" id="radio-padrao" />
      <label for="radio-padrao">Padrão</label>
    </div>
  </div>
  <div class="actions">...</div>
</div>
```

## `actions`

**Elemento obrigatório**!

Os botões de ação do formulário devem ser inseridos dentro de `actions`.

Este elemento dá suporte aos 4 botões de uso comum de forma simplificada:

- Primário
- Secundário
- Terciário
- Cancelar

Original --> `br-button`. Versão simplificada --> `button`.

Exemplo de uso:

```html
<div class="br-form">
  <div class="field">...</div>
  <div class="actions">
    <button class="button is-primary" type="button">Ação principal</button>
    <button class="button is-secondary" type="button">
      Ação secundária grande
    </button>
    <button class="button is-cancel" type="button">Cancelar</button>
  </div>
</div>
```

Isso não exclui usar a versão original dos botões. Ambos os formatos são suportados.

# Estados

Nenhum estado adicional.

# Regras especiais

O agrupador `actions` possui uma regra especial. Para _smartphones_ os botões, além de ocuparem toda a largura disponível, seguem o ordenamento normal. Nos outros dispositivos com larguras maiores o ordenamento dos botões é invertido.

**Atenção**! O botão de ação principal sempre deve ser declarado primeiro.

O alinhamento (esquerda ou direita) dos `actions` pode ser modificado com as classes **Flex** do Bootstrap [https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content](https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content).
