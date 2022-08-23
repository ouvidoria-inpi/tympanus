[version]: # "1.0.0"



## Como usar



### Atributos no Tooltip Texto

#### Obrigatórios

| Atributo                               | Tipo     | Descrição                         |
| -------------------------------------- | -------- | --------------------------------- |
| `data-tooltip-text="texto do tooltip"` | atributo | Texto que vai aparecer no tooltip |

### Atributo no Tooltip com elemento

#### Obrigatórios

| Atributo                               | Tipo     | Descrição                                        |
| -------------------------------------- | -------- | ------------------------------------------------ |
| `data-tooltip-target="id do elemento"` | atributo | Indica qual o tooltip em que vai gerar o tooltip |
| `br-tooltip`                           | classe   | Indica qual o tooltip em que vai gerar o tooltip |

### Javascript

```javascript
import Tooltip from 'core'
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

#### Objeto de configuração

| Propriedade   | Tipo   | Descrição                                                       |
| ------------- | ------ | --------------------------------------------------------------- |
| `activator`   | Object | Referência ao elemento (DOM) acionador                          |
| `placement`   | String | Local aonde vai ser mostado o tooltip(top, right, left, bottom) |
| `textTooltip` | String | Texto do tooltip                                                |
| `type`        | String | Tipo de tooltip(info, warning)                                  |
