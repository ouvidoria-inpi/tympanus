[version]: # "1.0.0"

<div class="br-message info" role="alert">
<div class="icon" aria-label="Informação"><i class="fas fa-info-circle fa-lg" aria-hidden="true"></i></div>
<div class="content">
<p><strong>Dependência externa.</strong></p>
<p>Este componente usa o vendor <a href="https://popper.js.org/">Popper</a>. Em caso de dúvidas leia a documentação de <a href="/guias/uso-de-vendors">Uso de Vendors</a>.</p>
</div>
</div>
</div>

## Como usar

### HTML (Tooltip Texto)

```html
<a href="javascript:void(0);" data-tooltip-text="Texto de Informação!">
</div>
```

### HTML (Tooltip Texto)

```html

  <a class="h5" href="javascript:void(0);" data-tooltip-target="#example-tooltip">Informação</a>
              <div class="br-tooltip" id="example-tooltip" role="tooltip" data-toggle="tooltip" info="info" place="top">
                <span class="text" role="tooltip">Fulano de Tal da Silva</span>
                <span class="subtext">Diretor Presidente</span>
              </div>

```

### Atributos no Tooltip Texto

#### Obrigatórios

| Atributo                                | Tipo     | Descrição                                                 |
| --------------------------------------- | -------- | --------------------------------------------------------- |
| `data-tooltip-text="texto do tooltip"`  | atributo | Texto que vai aparecer no tooltip |

### Atributo no Tooltip com elemento

#### Obrigatórios

| Atributo                                    | Tipo     | Descrição                                                           |
| ------------------------------------------- | -------- | ------------------------------------------------------------------- |
| `data-tooltip-target="id do elemento"` | atributo | Indica qual o tooltip em que vai gerar o tooltip |
| `br-tooltip` | classe | Indica qual o tooltip em que vai gerar o tooltip |

### Javascript

```javascript
import Tooltip from 'dsgov'
 window.document
      .querySelectorAll('[data-tooltip-text]')
      .forEach((TooltipExample) => {
        const texttooltip = TooltipExample.getAttribute('data-tooltip-text')
        const config = {
          activator: TooltipExample,
          placement: 'top',
          textTooltip: texttooltip,
        }

        TooltipExampleList.push(new Tooltip(config))
      })

    
```
