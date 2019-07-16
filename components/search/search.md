# Busca com autocomplete

**Este componente requer script para funcionar corretamente**!

## Dependências

- componente `br-input` do tipo **Input com autocomplete**
- script `input-autocomplete.js`
- `JSON` com a lista de sugestões
- componente `br-button`

## Código básico

```html
<div class="br-search">
  <div class="br-input is-autocomplete">
    <label for="search-autocomplete" class="sr-only">Autocomplete</label>
    <input id="search-autocomplete" type="text" placeholder="Digite um país">
    <span class="icon">
      <i class="fas fa-search"></i>
    </span>
  </div>
  <div class="action">
    <button class="br-button is-primary ml-3" type="button">Buscar</button>
  </div>
</div>
<!-- script do autocomplete -->
<script src="input-autocomplete.js"></script>
<!-- JSON exemplo -->
<script>
  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan"];
</script>
<!-- Carregar o JSON -->
<script>
  autocomplete(document.getElementById("search-autocomplete"), countries);
</script>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-search`: container do componente
- `br-input`: componente **Input com autocomplete**
- `action`: container do botão de busca

## `br-input`

**Elemento obrigatório**!

Este componente PODE ser usado de forma completa. Veja a documentação em `br-input`.

Caso exista `feedback` e/ou `help`, eles deverão a regra de `br-input`

## `action`

**Elemento obrigatório**!

Colocar o componente `br-button` dentro desse elemento.

Este elemente deve ser SEMPRE o último dentro de `br-search`.

Caso exista `feedback` e/ou `help` use a regra do componente `br-input`.

Exemplo de uso:

```html
<div class="br-search">
  <div class="br-input is-autocomplete is-invalid">...</div>
  <div class="feedback">...</div>
  <p class="help">...</p>
  <div class="action">...</div>
</div>
...
```

# Estados

Nenhum estado adicional.

# Regras especiais

Nenhuma regra especial.
