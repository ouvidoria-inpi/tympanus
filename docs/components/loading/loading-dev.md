## Dependências

-   Sem dependências.

## Código Básico do Loading Determinado

Exibe quanto tempo uma operação vai demorar. Exibe uma progressão **percentual de 0 a 100**. Pode ser utilizado com ou sem o `Botão Cancelar`. Possui apenas um tamanho.

### Loading Determinado com Botão Cancelar

```html
<div class="br-loading" data-progress="75" progress>
  <div class="br-loading-mask" full>
    <div class="br-loading-fill"></div>
  </div>
  <div class="br-loading-mask">
    <div class="br-loading-fill"></div>
  </div>
</div>
<button class="br-button is-tertiary" type="button">Cancelar</button>
```

### Loading Determinado sem Botão Cancelar

```html
<div class="br-loading" data-progress="90" progress>
  <div class="br-loading-mask" full>
    <div class="br-loading-fill"></div>
  </div>
  <div class="br-loading-mask">
    <div class="br-loading-fill"></div>
  </div>
</div>
```

## Código Básico do Loading Indeterminado

Demonstra um tempo de espera não especificado. Exibe uma forma circular em  movimento contínuo enquanto o processamento dos dados estiver ocorrendo. Pode ser usado com ou sem o `Rótulo`.

### Loading Indeterminado com Rótulo

```html
<div class="br-loading" continuos>
  <div class="spinner"></div>
</div>
<span>Carregando...</span>
```

### Loading Indeterminado sem Rótulo

```html
<div class="br-loading" continuos>
  <div class="spinner"></div>
</div>
```

### Loading Indeterminado Pequeno com Rótulo

```html
<div class="br-loading" continuos sm>
  <div class="spinner"></div>
</div>
<span>Carregando...</span>
```

### Loading Indeterminado Pequeno sem Rótulo

```html
<div class="br-loading" continuos sm>
  <div class="spinner"></div>
</div>
```

## Detalhamento

O componente é composto dos seguintes elementos principais:

-   `.br-loading`: container do componente.
    -   `progress`: atributo html utilizado para definir um loading do tipo progressivo com animação de valor determinado.
    -   `data-progress`: atributo html utilizado para definir a porcentagem de carregamento de um loading determinado.Essa propriedade deve ser modificada dinamicamente para que o loading carregue até o valor desejado.
    -   `continuos`: atributo html utilizado para defirnir um loading do tipo indeterminado com animação de rotação contínua.
    -   `sm`: atributo html utilizada juntamente com a classe `.br-loading` para ativar um loading indeterminado de tamanho pequeno.

## Regras especiais

Sem regras especiais.