# Caixa de texto com botão de ação (input-action)

Alguns inputs podem vir com botões de ação dentro. Um exemplo prático é para a opção de mostrar/ocultar a senha.

Para esses casos existe o componente `br-input-action`.

## Exemplo de uso

Veja a seguir como usar o componente.

```html
<div class="br-input-action">
  <input type="password" id="password" placeholder="Digite sua senha de 8 a 11 dígitos">
  <!-- Botão de ação -->
  <button onclick="mostrarEsconder()" class="action">
    <span class="sr-only">Mostrar senha</span>
    <i id="password-icon" class="fas fa-eye"></i>
  </button>
</div>
```
