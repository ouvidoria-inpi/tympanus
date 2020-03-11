## Dependências

Para diferentes tamanhos deve ser definido o tamanho de fonte (font-size) do componente pai ou usar a classe `.fa-1x`, onde para aumentar o tamanho do ícone, muda-se o valor ao lado de `.fa-?X`. 

## Posicionamento e Tipos de badges

Podemos posicionar os badges na parte `superior`, `inferior`, `esquerda` e `direita`. 
Existem também os seguintes tipos de badges:
Ícones de estados;
Símbolos;
Números e Contadores.

## Cores

Para definir as cores dos bages são usadas as seguintes classes:

- `is-success`
- `is-warning`
- `is-info`
- `is-danger`

## Código

Badge com Ícone alinhado ao topo, a esquerda e cor de sucesso(is-success):

``` Html
    <span class="br-badge is-top is-left icon">
      <i class="fas fa-circle is-success"></i>
    </span>
```

Badge com Ícone alinhado ao topo, a direita e cor de atenção(is-warning):
``` Html
   <span class="br-badge is-top is-right icon">
    <i class="fas fa-circle is-warning"></i>
   </span>
```

Badge com Ícone alinhado a base, a esquerda e cor de informação(is-info):
``` Html
  <span class="br-badge is-bottom is-left icon">
    <i class="fas fa-circle is-info"></i>
  </span>
```

Badge com Ícone alinhado a base, a direita e cor de perigo(is-danger):
``` Html
  <span class="br-badge is-bottom is-right icon">
    <i class="fas fa-circle is-danger"></i>
  </span>
```

Seguindo a mesma lógica de posicionamento **topo**, **direita**, **baixo** e **esquerda**, temos também os badges com `Símbolos`, `Números` e `Contadores`.

Badge com Símbolo alinhado ao topo, a esquerda e cor de sucesso(is-success):
``` Html
  <span class="br-badge is-top is-left simbol">
    <i class="fas fa-check is-success"></i>
  </span>
```

Badge com Número alinhado a base e a direita(por padrão a corda fonte da classe fa-layers-cont é #ff253a):
``` Html
  <span class="br-badge fa-layers-counter fa-layers-bottom-right">5</span>
```

Badge com Contador alinhado ao topo e a direita(por padrão a corda fonte da classe fa-layers-cont é #ff253a):
```Html
  <span class="br-badge fa-layers-counter fa-layers-top-right">999+</span>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

- `br-badge`: container do componente;
- `is-top`, `is-right`, `is-bottom` e `is-left`: para definir o posicionamento do badge em relação ao elemento que se deseja posicionar;
- `is-symbol`: para definir badge sinalização de status com símbolo;
- `icon`: elemento usado para status, através de um ícone de circulo e cor;