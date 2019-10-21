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
    <span class="status"></span>
</div>
```

Ou

```html
<div class="br-badge">
    <i></i>
    <i class="fas symbol"></i>
</div>
```

Ou 


```html
<div class="br-badge">
    <i></i>
    <span class="count"> {{valor}} </span>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

- `br-badge`: container do componente;
- `status`: para badge sinalização;
- `symbol`: para badge sinalização de status com símbolo;
- `count`: para badge contagem;

# Estados

## Cores
Para definir as cores dos bages são usadas as seguintes classes:
- `success` 
- `warning`
- `info`
- `danger`

## Posição
Para definir o posicionamento dos bages são usadas as seguintes classes:
- `top` ou `bottom`
- `left` ou `right`


## Exemplo:
```html 
<div class="br-badge">
    <i class="fas fa-file"></i>
    <i class="fas fa-check symbol left bottom warning"></i>
</div>
```

# Regras especiais

Os badges de tipo 1 tem tamanho fixo de "8px" e só podem ter definidos o posicionamento superior ou inferior (top ou bottom). 

