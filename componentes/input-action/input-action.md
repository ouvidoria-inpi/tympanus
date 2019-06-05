# Caixa de texto com botão de ação (input-action)

Alguns inputs podem vir com botões de ação dentro deles. Um exemplo disso é quando o input de senha possui o botão de mostrar/ocultar a senha.

Para esses casos existe o componente `br-input-action`.

O botão de ação pode ser alinhado à direita (recomendado) ou à esquerda.

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

No exemplo acima o botão de ação estará no canto direito do input. Caso o botão estivesse declarado antes do input ele estaria no canto esquerdo.

