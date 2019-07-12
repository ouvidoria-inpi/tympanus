# Login social

Botões para login com redes sociais.

## Dependências

- **br-divider**
- **br-button** (Redes Sociais)

## Código básico

```html
<div class="br-login-social">
  <!-- Divisor de conteúdo -->
  <div class="br-divider">
    <span class="content">Ou</span>
  </div>
  <!-- Redes Sociais -->
  <button style="background: #3b5998; color: #fff;" class="br-button is-social-media" type="button">
    <i class="fab fa-facebook-f fa-lg"></i>
  </button>
  <button style="background: #00aced; color: #fff;" class="br-button is-social-media" type="button">
    <i class="fab fa-twitter fa-lg"></i>
  </button>
  <button class="br-button is-social-media" type="button">
    <img src="../../assets/images/google.png" alt="Google">
  </button>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos:

- `br-login-social`: container do componente

# Estados

Nenhum estado adicional.

# Regras especiais

Os botões serão alinhados automaticamente no centro do divisor de conteúdo e sempre espaçados horizontalmente.
