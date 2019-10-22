# Badge

O Componente Badge pode ser de três tipos:

- `1: Sinalização`
- `2: Sinalização de status com símbolo`
- `3: Contagem`

## Dependências

Para diferentes tamanhos deve ser definido o tamanho de fonte (font-size) do componente pai.

## Código básico

```html
<div class="br-badge">
    <span class="icon"></span>
</div>
```

Ou

```html
<div class="br-badge is-status">
    <span class="icon"></span>
</div>
```

Ou

```html
<div class="br-badge is-symbol">
    <i></i>
    <i class="fas icon"></i>
</div>
```

Ou 


```html
<div class="br-badge is-count">
    <i></i>
    <span class="number"> {{valor}} </span>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

- `br-badge`: container do componente;
- `is-status`: para badge sinalização;
- `is-symbol`: para badge sinalização de status com símbolo;
- `is-count`: para badge contagem;
- `icon`: elemento interno do badge de sinalização que contem o icone a ser exibido;
- `number`: elemento interno do badge contagem que contem o valor a ser exibido;

# Estados

## Cores
Para definir as cores dos bages são usadas as seguintes classes:
- `is-success` 
- `is-warning`
- `is-info`
- `is-danger`

## Posição
Para definir o posicionamento dos bages são usadas as seguintes classes:
- `is-top` ou `is-bottom`
- `is-left` ou `is-right`


## Exemplo:
```html 
<div class="br-badge is-symbol is-left is-bottom is-warning">
    <i class="fas fa-file"></i>
    <i class="fas fa-check icon"></i>
</div>
```

# Regras especiais

Os badges de tipo 1 só podem ter definidos o posicionamento superior ou inferior (top ou bottom). 

