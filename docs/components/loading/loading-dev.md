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
<button class="br-button" type="button">Cancelar</button>
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

Demonstra um tempo de espera não especificado. Exibe uma forma circular em movimento contínuo enquanto o processamento dos dados estiver ocorrendo. Pode ser usado com ou sem o `Rótulo`.

### Loading Indeterminado com Rótulo

```html
<div loading md label></div>
<span>Carregando...</span>
```

### Loading Indeterminado sem Rótulo

```html
<div loading md></div>
```

### Loading Indeterminado Pequeno com Rótulo

```html
<div loading label></div>
<span>Carregando...</span>
```

### Loading Indeterminado Pequeno sem Rótulo

```html
<div loading></div>
```

## Detalhamento

O componente é composto dos seguintes elementos principais:

-   `.br-loading`: container do componente loading Determinado.
    -   `data-progress`: atributo html utilizado para definir a porcentagem de carregamento de um loading determinado.Essa propriedade deve ser modificada dinamicamente para que o loading carregue até o valor desejado.
-   `loading`: atributo html utilizado para definir um loading do tipo indeterminado com animação de rotação contínua. Pode ser aplicado em qualquer tag html.
    -   `md`: atributo html utilizado juntamente com o atributo `loading` para ativar um loading indeterminado de tamanho médio.
    -   `label`: atributo html utilizado juntamente com o atributo `loading` para configurar um loading indeterminado com label.

## Regras especiais

Sem regras especiais.
