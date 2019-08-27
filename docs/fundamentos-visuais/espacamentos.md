# Espaçamentos

Conforme mencionado no Sistema de Grid, foi usada a **Grade de 8 Pontos** - <https://spec.fm/specifics/8-pt-grid> - para definir dimensões, preenchimento e margem de elementos em bloco e em linha.

## Base da Grade de 8 pontos

Os espaçamentos foram criados com base no utilitário **Spacing** do Bootstrap, portanto sua forma de uso é parecida. Os valores foram adaptados e/ou acrescentados.

Leia a documentação oficial de uso do utilitário no endereço [https://getbootstrap.com/docs/4.3/utilities/spacing/](https://getbootstrap.com/docs/4.3/utilities/spacing/).

Exemplo de uso:

```html
<header id="header" class="page-header pt-1 pb-2 pt-md-3 pb-md-4">
  <!-- Acessibilidade -->
  <div class="accessibility py-half py-lg-3"></div>
  <!-- Logo -->
  <div id="logo" class="logo my-2 my-sm-3 my-lg-4"></div>
</header>
```

Os valores dos espaçamentos são os seguintes:

- **0** - elimina margin e padding atribuindo o valor 0;
- **half** - 4px
- **1** - 8px
- **2** - 12px
- **3** - 16px
- **4** - 20px
- **5** - 24px
- **6** - 32px
- **7** - 36px
- **8** - 40px
- **9** - 44px
- **10** - 56px
- **auto** - define o valor "auto"
