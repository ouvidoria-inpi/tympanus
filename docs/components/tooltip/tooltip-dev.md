 ## Dependências

O Tooltip usa como base o componente Popper para mais informações acesse o link [https://popper.js.org/](https://popper.js.org/).

## Código básico

```html
<div class="br-tooltip">
  <span class="text">Texto de Informação</span>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

- `br-tooltip`: container do componente;
- `text`: elemento interno do tooltip que contem o texto principal a ser exibido;


# Estados

## Cores

Para definir as cores dos tooltips são usadas as seguintes classes:

- `is-success`
- `is-warning`
- `is-info`
- `is-danger`

## Posição

Para definir o posicionamento dos tooltips são usados os seguintes atributos:

- `place="top"` ou 
- `place="bottom"` ou
- `place="left"` ou 
- `place="right"`

Caso o atributo não seja definido, ou apresente erro, o padrão será definido para `top`.

### Exemplo:

```html
<div class="br-tooltip is-warning" place="left">
  <span class="text">Texto de Informação</span>
  <span class="subtext">Sub-texto</span>
</div>
```

## PopOver 

Tipo de tooltip é formado pelos seguintes elementos:

- `is-popover`: classe para definir tooltip do tipo PopOver;
- `popover-header`: é o container para icones e texto principal;
- `popover-body`:  é o container para o texto secundário;
- `popover-footer`: é o container para botoes e links (opcional);
- `popover-image`: é o container para imagens (opcional);

### Exemplo:

```html
<div class="br-tooltip is-popover is-success">
  <div class="popover-header">
    <span class="text">Cadastro Concluído!</span>
  </div>
  <div class="popover-body">
    <span class="subtext">Para verificar mais detalhes a respeito do seu acesso, clique no link abaixo.</span>
  </div>
  <div class="popover-footer">
    <a class="link" href="#">Clique aqui</a>
  </div>
</div>
```

### PopOver com Ícone e Botão:

- Os ícones devem ser inseridos dentro do container `popover-header`. 
- Os botões e links devem ser inseridos dentro do container `popover-footer`, caso não sejam necessários esse container pode ser omitido. 

```html
<div class="br-tooltip is-warning is-popover" place="left">
  <div class="popover-header">
    <i class="fas fa-exclamation-triangle"></i>
  </div>
  <div class="popover-body">
    <span class="subtext">É recomendado que o cadastro seja atualizado antes de prosseguir.</span>
  </div>
  <div class="popover-footer">
    <button class="br-button is-primary" type="button"><span>Atualizar</span></button>
  </div>
</div>
```


### PopOver com Imagem:

- Uma imagem (de tamanho máximo de 120px) pode ser inserida dentro do container `popover-image` que deve ser declarado antes dos demais containers:

```html
<div class="br-tooltip is-info is-popover" place="bottom">
  <div class="popover-image">
    <img src="" alt="Avatar">
  </div>
  <div class="popover-header">
    <span class="text">Fulano de Tal da Silva</span>
  </div>
  <div class="popover-body">
    <span class="subtext">Diretor Presidente</span>
  </div>
</div>

```

## Aparecer / Esconder  

Existem atributos que podem ser declarados para controlar se os tooltips devem aparecer incialmente e após quantos milisegundos devem ser ocultados:

- `active`: atributo que pode ser definido quando se deseja que o tooltip apareça no inicio do carregamento;
- `timer`: atributo que determina após quantos milisegundos o tooltip deve ser automaticamente ocultado;

```html
<div class="br-tooltip is-info" place="right" timer="8000" active="true">
  <span class="text">Fulano de Tal da Silva</span>
  <span class="subtext">Diretor Presidente</span>
</div>

```

# Regras especiais

## Posicionamento
Os tooltips só podem ter definidos um único posicionamento (top, bottom, left ou right) mas, caso seu conteúdo extrapole as dimensões da tela, ele será automaticamento reposicionado.

## Declaração
O tooltip fica vinculado ao elemento (tag) declarado na linha/bloco anterior (parente, ou sibling, da árvore html) do código html. Assim, no exemplo abaixo, aparecerá sobre o texto da tag `<span>`:

```html
<div>
  <span class="h3">Tooltip com Texto Simples</span>
  <div class="br-tooltip" place="bottom">
    <span class="text">Texto de Informação</span>
  </div>
<div>
``` 
