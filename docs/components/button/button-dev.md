## Dependências

Nenhuma dependência.

## Código básico

```html
<button class="br-button" type="button">Botão</button>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

- `br-button`: container do componente

## Variações

Estão disponíveis 2 grupos de botões. Os `botões finalísticos` e `botões contextuais`. Cada tipo é aplicado com o prefixo `is-`.

### Botões finalísticos

- Primário(Ênfase Alta)
- Call to Action Web e Call to Action Mobile(Ênfase Muito Alta)
- Secundário ou Delineado(Ênfase Média)


#### Botão Primário

Toda **ação principal** na tela deve usar o **Botão Primário**.

NUNCA use mais de 1 Botão Primário, pois confunde o usuário em sua tomada de decisão. Podem também conterem ícones para serem usados em sistemas antigos, que já utilizam ícones em suas estruturas.

Exemplo de uso:

```html
<button class="br-button is-primary" type="button">Ação</button>
<button class="br-button is-primary" type="button"><span><i class="fas fa-print"></i>Imprimir</span>
</button>
```

#### Botão Call to Action(Web e Mobile)

Usado em situações que necessitem atenção especial. Ele é diferente do Botão Primário.

Exemplo de uso:

```html
<button class="br-button is-call-to-action ml-3" type="button">Ação</button>
<button class="br-button is-circle is-large is-call-to-action is-mobile" type="button"><i class="fas fa-plus"> </i>
```

#### Botão Secundário

Para **ações subjetivas** ou de **menor importância** use **Botão Secundário**. Este botão PODE ser usado quantas vezes forem necessárias na tela. Podem também usarem ícones(assim como os botões primários) para serem usados em sistemas antigos, que já utilizam ícones em suas estruturas.

Exemplo de uso:

```html
<button class="br-button is-secondary" type="button">Ação</button>
```


### Botões Contextuais
Botões terciários para ações mais pontuais e com menor ênfase

- Terciário(Ênfase Baixa)
- Terciário(Label Sem Ícone)
- Terciário(Label Com Ícone)
- Redes Sociais


#### Botão Terciário

Nas situações em que o botão deverá se comportar como um **hiperlink**, também em ações específicas de navegação em um formulário ou tabela e também como botões ícones.

Exemplo de uso:

```html
<button class="br-button is-tertiary" type="button">Ação</button>
```


#### Botão Circular

Use apenas ícones nestes botões.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Imagens serão redimencionadas automaticamente dentro do botão. Nos ícones do Fontawesome use **cor primária** ou **cor secundária**.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<button class="br-button is-circle" type="button">
  <img class="icon" src="image.png" alt="Texto descritivo" />
</button>
<button class="br-button is-circle is-primary" type="button">
  <i class="fas fa-chevron-up"></i>
</button>
<button class="br-button is-circle is-secondary" type="button">
  <i class="fas fa-chevron-down"></i>
</button>
```

#### Botão Redes Sociais

Botões para login com redes sociais. A regra é a mesma dos botões circulares.

A maioria dos ícones de redes sociais podem ser encontrados no Fontawesome. Para ícones mais complexos, como o do Google, use imagem.

Exemplo de uso:

```html
<button class="br-button is-circle is-medium text-white bg-facebook border-facebook" type="button"><i class="fab fa-facebook-f"></i>
</button>
<button class="br-button is-circle is-medium text-white bg-twitter border-twitter" type="button"><i class="fab fa-twitter"></i>
</button>
```


## Estados

### `focus` e `hover`

- São aplicados automaticamente no elemento
- Podem ser aplicados diretamente usando o prefixo `is-`

Exemplo de uso:

```html
<button class="br-button is-primary is-hover" type="button">Ação</button>
<button class="br-button is-primary is-focus" type="button">Ação</button>
```

### disabled

- Deve ser aplicado como propriedade no componente quando for tag do tipo `<button>` ou `<input>`
- Pode ser aplicado diretamente usando o prefixo `is-`.

Exemplo de uso:

```html
<button class="br-button is-primary is-disabled" type="button" disabled>
  Ação desativada
</button>
```

### Progresso(loading)

- Sempre que necessário aplique o estado de `loading` nos botões para sinalizar ao usuário que o sistema está operando
- Este estado é recomendados para os tipos **Botão Primário**, **Botão Secundário**, **Botão Call to Action(Web E Mobile)**
- Deve ser aplicado diretamente no componente usando o prefixo `is-loading`

Exemplo de uso:

```html
<button class="br-button is-primary is-loading" type="button"></button>
```

## Regras especiais

Em _smartphones_ o botão terá a largura da tela. Será aplicado espaçamento vertical automático de 16px entre eles.

Nos demais dispositivos os botões terão tamanho mínimo de 144px. Será aplicado espaçamento horizontal automático de 24px entre botões.

Botões dentro do elemento `actions` do componente `br-form` serão ordenados de forma inversa.
