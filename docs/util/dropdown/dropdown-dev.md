[version]: # "1.0.0"

## Como usar

### HTML

```html
<div data-toggle="dropdown" data-target="id-target" aria-controls="id-target" aria-expanded="false" data-visible="false">
  ...
</div>
<div id="id-target" aria-hidden="true" hidden>
  ...
</div>
```

### Atributos no elemento acionador

#### Obrigatórios

| Atributo                  | Tipo     | Descrição                                                                           |
| ------------------------- | -------- | ----------------------------------------------------------------------------------- |
| `data-toggle="dropdown"`  | atributo | Indica que o elemento é o acionador do comportamento e qual o tipo de comportamento |
| `data-target="id-target"` | atributo | Indica qual o elemento que é o alvo (aquele que será aberto/fechado)                |
| `id` | atributo | id do alvo              |

#### Opcionais

| Atributo                    | Tipo     | Descrição                                                                               |
| --------------------------- | -------- | ------------------------------------------------------- |
| `aria-controls="id-target"` | atributo | Atributo de acessibilidade                              |
| `aria-expanded="true/false"`| atributo | Atributo de acessibilidade                              |
| `data-visible="true/false"` | atributo | Atributo de controle de visibilidade em relação ao alvo |

> Os atributos opcionais do acionador são gerados automaticamente pelo javascript.

### Atributo no elemento alvo

#### Obrigatórios

| Atributo         | Tipo     | Descrição                            |
| ---------------- | -------- | ------------------------------------ |
| `id="id-target"` | atributo | O id é usado para referenciar o alvo |

#### Opcionais

| Atributo                   | Tipo     | Descrição                         |
| -------------------------- | -------- | --------------------------------- |
| `aria-hidden="true/false"` | atributo | Atributo de acessibilidade        |
| `hidden`                   | atributo | Atributo que abre/fecha o alvo |

> Os atributos opcionais do alvo são gerados pelo javascript.

### Javascript

**Para cada acionador (trigger)**, instanciar a classe dropdown passando um objeto de configuração.

```javascript
import Dropdown from 'govbrds'
const config = {
  trigger,
  iconToShow: 'fa-chevron-down',
  iconToHide: 'fa-chevron-up',
  useIcons: true,
  target
}
new Dropdown(config)
```

> link do utilitário [Dropdown](<assets/dropdown.js>)

#### Objeto de configuração

| Propriedade  | Tipo    | Descrição                                                        |
| ------------ | ------- | ------------------------------------------------------------------ |
| `trigger`    | Object  | Referência ao elemento (DOM) acionador                                   |
| `iconToShow` | String  | Classe CSS para o ícone com o significado de "mostrar o conteúdo"  |
| `iconToHide` | String  | Classe CSS para o ícone com o significado de "esconder o conteúdo" |
| `useIcons`   | Boolean | Indica se o comportamento usará ou não ícones                      |
| `target`    | Object  | Referência ao elemento (DOM) alvo                                   |

> Os propriedades `iconToShow`, `iconToHide` e `useIcons` possuem, por padrão, os valores `fa-chevron-down`, `fa-chevron-up` e `true`, respectivamente. Por tanto, são **opcionais** no objeto de configuração.
