# Scrim

Use para redirecionar a atenção do usuário para outras partes ou elementos da tela.
Podem existir vários scrims ativos na mesma tela. 

## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-scrim is-foco"></div>
<div class="br-scrim is-legibilidade"></div>
<div class="br-scrim is-inibicao"></div>
```
---

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-scrim` (obrigatório): container do componente


A classe `br-scrim` é obrigatória e seu uso deve estar associado com um tipo de scrim (`is-foco`, `is-legibilidade` ou `is-inibicao`):

- `is-foco`: mudança de foco entre um elemento e outro
- `is-legibilidade`: quando um texto precisa ser aplicado sobre um superfície e o contraste fundo/texto não é suficiente para gerar contraste acessível
- `is-inibicao`: simular elementos para o estado de desativado

O uso do componente scrim deve feito através de sua aplicação em uma `<div>` por cima dos demais elementos, ou seja, essa classe envolverá os elementos que passarão a receber o efeito scrim.

---

# Estados

O scrim do tipo `is-foco` por padrão possui seu estado inativo. Para definir que está ativo, usar a 
classe:

- `is-active`

**Exemplo**:

```html
scrim = document.getElementsByClassName("is-foco")[0];

function on() {
    scrim.classList.add("is-active");
  }
  
function off() {
    scrim.classList.remove("is-active");
}
```
---

# Regras especiais

**Cuidado**: ao utilizar o scrim do tipo `is-legibilidade`, não criar obstáculos para o usuário realizar uma busca ou utilizar a área de acessibilidade. Deve existir uma boa justificativa para impedir acesso a essas áreas de suporte.

---