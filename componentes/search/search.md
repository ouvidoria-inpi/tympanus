# Busca com autocomplete

**Este componente requer script para funcionar corretamente**!

## Dependências

Carregue o arquivo `search.js` para uso correto do componente.

## Código básico

```html
<label for="search-autocomplete">Busca</label>
<div class="br-search">
  <div class="field">
    <input id="search-autocomplete" type="text" placeholder="Digite um país">
    <span class="icon">
      <i class="fas fa-search"></i>
    </span>
  </div>
  <div class="actions">
    <button class="br-btn is-primary ml-3" type="button">Buscar</button>
  </div>
</div>
<!-- script do autocomplete -->
<script src="search.js"></script>
<!-- exemplo de listagem -->
<script>
  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  autocomplete(document.getElementById("search-autocomplete"), countries);
</script>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-search`: container do componente
- `field`: container da área de busca
- `actions`: container do botão de busca (item opcional)
- `feedback`: mensagem de erro ou retorno positivo (item opcional)

## `br-search`

**Elemento obrigatório**!

O `<label>` do campo de busca DEVE ficar de fora do `br-search`. Ele NÃO PODE ser removido por questões de acessibilidade do componente. Caso haja necessidade de ocultar ele use a classe `sr-only`.

Exemplo de uso:

```html
<label for="search-autocomplete" class="sr-only">Busca</label>
<div class="br-search">...</div>
```

## `field`

**Elemento obrigatório**!

Este componente é formado pelos seguintes elementos:

- `<input>`: caixa de busca (**declarado no HTML**)
- `icon`: ícone de busca (**declarado no HTML**)
- `search-items`: Listagem das sugestões de autocomplete (**gerado pelo script**)

O `<input>` possui as mesmas características do componente `br-input`.

O `icon` poderá conter uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

O `search-items` é gerado pelo script `search.js`. Os itens sugeridos são acessados por cursor ou teclado.

## `actions`

O botão de busca PODE ficar dentro deste elemento. Ele será alinhado horizontalmente com a caixa de busca.

## `feedback`

A busca PODE conter uma mensagem de feedback.

Para mensagens positivas use a classe `is-valid` no `br-search`.

Exemplo de uso:

```html
<div class="br-search is-valid">
  <div class="field">...</div>
  <div class="actions">...</div>
  <div class="feedback">
    <i class="fas fa-check-circle"></i>
    <span class="message">Mensagem positiva</span>
  </div>
</div>
```

Para mensagens de erro use a classe `is-invalid` no `br-search`.

Exemplo de uso:

```html
<div class="br-search is-invalid">
  <div class="field">...</div>
  <div class="actions">...</div>
  <div class="feedback">
    <i class="fas fa-times-circle"></i>
    <span class="message">Mensagem de erro</span>
  </div>
</div>
```

# Estados

Este componente apresenta os seguintes estados adicionais:

- valid
- invalid
- focus
- disabled

Os estados `valid` e `invalid` são aplicados diretamente usando o prefixo `is-` no `br-search`.

O estado `focus` é aplicado automaticamente `<input>`.

O estado `disabled` deve ser aplicado como propriedade no `<input>`.

Exemplo de uso:

```html
<div class="br-search">
  <div class="field">
    <input id="search-autocomplete" type="text" placeholder="Campo desativado" disabled>
    <span class="icon">...</span>
  </div>
</div>
```

# Regras especiais

Nenhuma regra especial.
