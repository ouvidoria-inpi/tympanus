# Mensagens de Alerta

Mensagem de alerta do sistema.

## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-alert">
  <div class="icon">...</div>
  <div class="content">...</div>
  <div class="close">...</div>
</div>
```

## Detalhamento

O componente é composto dos seguintes elementos:

- `br-alert`: container do componente
- `icon`: icon ilustrativo
- `content`: conteúdo da mensagem
- `close`: botão de fechar

### `icon`

Elemento onde deverá ser informado o ícone ilustrativo da mensagem.

O ícone pode ser uma imagem - `<img src="" alt="">` ou ícone do Fontawesome - `<i class="fas">`.

Imagens serão redimencionadas automaticamente dentro do elemento.

Para conhecer os ícones do Fontawesome veja o link [https://fontawesome.com/](https://fontawesome.com/).

Exemplo de uso:

```html
<div class="br-alert">
  <div class="icon">
    <i class="fas fa-check-circle"></i>
    <span class="sr-only">Sucesso!</span>
  </div>
  <div class="content">...</div>
  <div class="close">...</div>
</div>
```

### `content`

A mensagem do alerta deve ser inserido dentro deste elemento.

Pode ser inserido deste uma simples mensagem.

Exemplo de uso:

```html
<div class="br-alert">
  <div class="icon">...</div>
  <div class="content">
    <strong>Erro!</strong>
    <span>Mensagem de erro.</span>
  </div>
  <div class="close">...</div>
</div>
```

Ou uma mensagem com várias linhas.

Exemplo de uso:

```html
<div class="br-alert">
  <div class="icon">...</div>
  <div class="content">
    <p>...</p>
    <p>...</p>
    <p>...</p>
    <p>...</p>
  </div>
  <div class="close">...</div>
</div>
```

### `close`

Local do botão de fechamento do alerta.

Exemplo de uso:

```html
<div class="br-alert">
  <div class="icon">...</div>
  <div class="content">...</div>
  <div class="close">
    <button type="button">
      <i class="fas fa-times"></i>
      <span class="sr-only">Fechar</span>
    </button>
  </div>
</div>
```

## Variações

Estão disponíveis 4 tipos de alertas. Cada tipo é aplicado com o prefixo `is-`.

- Sucesso (sucess)
- Erro (danger)
- Atenção (warning)
- Informação (info)

O tipo deve ser aplicado no container do componente.

Exemplo de uso:

```html
<div class="br-alert">
  <div class="icon">
    <i class="fas fa-times-circle"></i>
    <span class="sr-only">Erro!</span>
  </div>
  <div class="content">
    <strong>Erro!</strong>
    <span>Mensagem de erro.</span>
  </div>
  <div class="close">
    <button type="button">
      <i class="fas fa-times"></i>
      <span class="sr-only">Fechar</span>
    </button>
  </div>
</div>
```

## Estados

Nenhum estado adicional para este componente.

## Regras especiais

Nenhuma regra especial.
