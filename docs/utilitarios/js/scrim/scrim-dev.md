[version]: # "1.0.0"

## Como usar

### Atributos no elemento alvo

#### Obrigatórios

| Atributo                  | Tipo     | Descrição                       |
| ------------------------- | -------- | ------------------------------- |
| `data-scrim="true/false"` | atributo | Indica que o elemento é o scrim |

#### Opcionais

| Atributo                     | Tipo     | Descrição                                               |
| ---------------------------- | -------- | ------------------------------------------------------- |
| `aria-controls="id-target"`  | atributo | Atributo de acessibilidade                              |
| `aria-expanded="true/false"` | atributo | Atributo de acessibilidade                              |
| `data-visible="true/false"`  | atributo | Atributo de controle de visibilidade em relação ao alvo |

> Os atributos opcionais do acionador são gerados automaticamente pelo javascript.

#### Opcionais

| Atributo                   | Tipo     | Descrição                  |
| -------------------------- | -------- | -------------------------- |
| `aria-hidden="true/false"` | atributo | Atributo de acessibilidade |

> Os atributos opcionais do alvo são gerados pelo javascript.

### Javascript

**Para cada acionador (trigger)**, instanciar a classe scrim passando um objeto de configuração.

```javascript
import Scrim from 'core'
for (const buttonBloco1 of window.document.querySelectorAll(
      '.scrimutilexemplo button'
    )) {
      buttonBloco1.addEventListener('click', () => {
        const scrscrim = window.document.querySelector('#scrimutilexample')
        const scrimfoco = new Scrim({
          closeElement: '#scrimfechar',
          trigger: scrscrim,
        })
        scrimfoco.showScrim()
      })
    }
```

#### Objeto de configuração

| Propriedade | Tipo    | Descrição                                         |
| ----------- | ------- | ------------------------------------------------- |
| `trigger`   | Object  | Referência ao elemento (DOM) acionador            |
| `scrscrim`  | Boolean | Elemento (Dom) dentro do scrim  que fecha o scrim |

> A propriedade `scrscrim`  é  **opcional** no objeto de configuração.
