## Dependências

Nenhuma dependência.

## Código básico

``` html
<div class="br-scrim is-foco"></div>
```

Ou

``` html
<div class="br-scrim is-legibilidade"></div>
```

Ou

``` html
<div class="br-scrim is-inibicao"></div>
```

---

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

* `br-scrim` (obrigatório): container do componente

A classe `br-scrim` é obrigatória e seu uso deve estar associado com um tipo de scrim:

* `is-foco` : mudança de foco entre um elemento e outro
* `is-legibilidade` : quando um texto precisa ser aplicado sobre um superfície e o contraste fundo/texto não é suficiente para gerar contraste acessível
* `is-inibicao` : simular elementos para o estado de desativado

O uso do componente scrim deve feito através de sua aplicação em uma `<div>` por cima dos demais elementos, ou seja, essa classe envolverá os elementos que passarão a receber o efeito scrim.

---

# Variações de Scrim

## Foco

Usado principalmente quando um novo elemento surge na tela e necessita de uma atenção especial do usuário. Os elementos ou regiões que não requerem atenção do usuário ficam escuros, enquanto o novo elemento ganha atenção total.

Exemplo de uso:

``` html
<div class="br-scrim is-foco" onclick="off()">
    <div class="br-modal is-medium">
        <div class="br-modal-dialog">
            <div class="br-modal-content">
                <div class="br-modal-body">
                    <p>Conteúdo</p>
                </div>
                <div class="br-modal-footer justify-content-end">
                    <button class="br-button is-secondary is-small" type="button">
                        Ação 1
                    </button>
                    <button class="br-button is-primary is-small" type="button">
                        Ação 2
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Legibilidade

Usados como overlay para melhorar o constraste do texto sobre qualquer superfície, seja ela imagem ou não.

A legibilidade do texto deve ser feita com o uso da classe `scrim-text` , que se encarregará de posicionar o texto corretamente na tela.

Exemplo de uso:

``` html
<div class="br-scrim is-legibilidade">
    <div class="img">
        <div class="scrim-text">Texto</div>
    </div>
</div>
```

## Inibição

Por possuir um comportamento que impede a interação de elemento soprepostos, o scrim pode ser usado para simular o estado desativado de elementos dentro de uma área.

A principal característica neste modo, é que o elemento que recebe o scrim ficará visualmente desativado, simulando transparência em relação ao fundo.

A tag com a classe `br-scrim is-inibicao` , responsável por realizar o correto posicionamento do scrim inibição, deve encapsular o elemento desejado.

Exemplo de uso:

``` html
<div class="br-scrim is-inibicao">
    Com Scrim Inibição
</div>
```

---

# Estados

O scrim do tipo `is-foco` por padrão possui seu estado inativo. Para definir que está ativo, usar a classe:

* `is-active` 

**Exemplo**:

``` html
scrim = document.getElementsByClassName("is-foco")[0]; function on() {
scrim.classList.add("is-active"); } function off() {
scrim.classList.remove("is-active"); }
```

---

# Regras especiais

**Cuidado**: ao utilizar o scrim do tipo `is-legibilidade` , não criar obstáculos para o usuário realizar uma busca ou utilizar a área de acessibilidade. Deve existir uma boa justificativa para impedir acesso a essas áreas de suporte.

---

