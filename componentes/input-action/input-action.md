# Caixa de texto com botão de ação (input-action)

Alguns inputs podem vir com botões de ação dentro. Um exemplo prático é para a opção de mostrar/ocultar a senha.

Para esses casos existe o componente `br-input-action`.

## Exemplo de uso

Veja a seguir como usar o componente.

```html
<label for="password">Senha</label>
<div class="br-input-action">
  <input type="password" id="password" placeholder="Digite sua senha de 8 a 11 dígitos">
  <!-- Botão de ação -->
  <button onclick="mostrarEsconder()" class="action" type="button">
    <span class="sr-only">Mostrar senha</span>
    <i id="password-icon" class="fas fa-eye"></i>
  </button>
</div>
```

## Estados

O `br-input-action` pode assumir novos estados. A lista de estados disponíveis é a seguinte:

- focus
- valid
- invalid
- disabled

Os estados também podem ser aplicados por classe. O uso via classe deve ser usado com o prefixo `is-`. Exemplo:

```html
<label for="password-error">Senha com erro</label>
<div class="br-input-action is-invalid">
  <input type="password" id="password-error" placeholder="Digite sua senha de 8 a 11 dígitos">
  <!-- Botão de ação -->
  <button onclick="mostrarEsconder()" class="action" type="button">
    <span class="sr-only">Mostrar senha</span>
    <i id="password-icon" class="fas fa-eye"></i>
  </button>
</div>
```

Repare que a classe deve ser aplicada diretamente no componente e não no `input`.

> **Atenção**! O estado `disabled` é aplicado somente quando a propriedade está aplicada no input.

## Mensagens de feedback

Nos casos de erros ou retorno positivo do campo é possível usar um template de mensagem logo após o `br-input-action`. Veja a seguir um exemplo:

```html
<label for="password-feedback">Senha com erro</label>
<div class="br-input-action is-invalid">
  <input type="password" id="password-feedback" placeholder="Digite sua senha de 8 a 11 dígitos">
  <!-- Botão de ação -->
  <button onclick="mostrarEsconder()" class="action" type="button">
    <span class="sr-only">Mostrar senha</span>
    <i id="password-icon" class="fas fa-eye"></i>
  </button>
</div>
<div class="feedback">
  <i class="fas fa-times-circle"></i>
  <span class="message">Senha inválida</span>
</div>
```

Para os ícones use a família de ícones Fontawesome - [https://fontawesome.com/](https://fontawesome.com/)

Algumas convenções de ícones:

- Retorno negativo: `fas fa-times-circle`
- Retorno positivo: `fas fa-check-circle`
