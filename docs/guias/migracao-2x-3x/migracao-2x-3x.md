Este guia vai te ajudar a migrar da versão 2.4.3 para a 3.0.0 do Design System, caso tenha alguma dúvida, poderá ser submetida através do "Formulário para registro de dúvidas" disponível na página Como Contribuir.

**Dependências**

Atualizar a versão do node para v16.14.2

Atualizar o Design System GOV.BR para \@govbr/govbrds:3.0.0 ou fazer o download da nova versão na página de downloads

# Compatíveis

-   Accordion (Obsoleto/Depreciado)

-   Avatar

-   Breadcrumb

-   Button

-   Card

-   Carousel

-   CookieBar

-   Checkbox

-   DateTimePicker

-   Divider

-   Footer

-   Header

-   Input

-   Item

-   List

-   Loading

-   Magic Button

-   Menu

-   Message

-   Modal

-   Notification

-   Pagination

-   Radio Button

-   Scrim (Obsoleto/Depreciado)

-   Select

-   Sign-in

-   Skip Link

-   Step

-   Switch

-   Table

-   Tab

-   Tag

-   Textarea

-   Tooltip

-   Upload

-   Wizard

# Instanciação do Componente

Ao instanciar um componente passamos a utilizar `core.BRCarousel` ao invés de `dsgov.BRCarousel`. Segue exemplo do componente Carousel:

**Antes**

```javascript
const carouselList = []
for (const brCarousel of window.document.querySelectorAll('.br-carousel')) {
carouselList.push(new dsgov.BRCarousel('br-carousel', brCarousel))
}
```

**Após mudança**

```javascript
const carouselList = []
for (const brCarousel of window.document.querySelectorAll('.br-carousel')) {
carouselList.push(new core.BRCarousel('br-carousel', brCarousel))
}
```

# Mudanças de nomenclatura

**Os seguintes arquivos mudaram de nome:**

-   dsgov.min.js muda para core.min.js

-   dsgov.min.css muda para core.min.css

-   dsgov.css muda para core.css

-   dsgov.js muda para core.js

-   dsgov-init.js muda para core-init.js

-   dsgov-base.css muda para core-base.css

-   dsgov-base.js muda para core-base.js

-   dsgov-base.min.css muda para core-base.min.css

-   dsgov-lite.css muda para core-lite.css

-   dsgov-lite.js muda para core-lite.js

-   dsgov-lite.min.css muda para core-lite.min.css

**As seguintes pastas mudaram de nome:**

-   "node_modules\@govbr\dsgov\dist\" muda para "node_modules\@govbr-ds\core\dist\"
