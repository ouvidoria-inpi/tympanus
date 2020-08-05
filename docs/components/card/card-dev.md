[version]: # '5.0.0'

## Como usar

```html
<div class="br-card" [draggable="true/false" flipped="on|off" expanded="on|off" ] aria-disabled="true|false" [disabled]>
    <div class="front">
        <div class="header">...</div>
        <div class="content">...</div>
        <div class="footer">...</div>
    </div>
    <div class="back">
        <div class="header">...</div>
        <div class="content">...</div>
        <div class="footer">...</div>
    </div>
</div>
```

### Elementos obrigatórios

| Elemento   | Descrição                             |
| ---------- | ------------------------------------- |
| `.br-card` | Container do componente               |
| `.front`   | Container do conteúdo frontal do Card |
| `.content` | Conteúdo do Card                      |

### Elementos opcionais

| Elemento  | Descrição                                                   |
| --------- | ----------------------------------------------------------- |
| `.header` | Área de cabeçalho do Card                                   |
| `.footer` | Área do rodape do Card                                      |
| `.back`   | Conteúdo a ser visualizado quando o Card for do tipo "flip" |

### Atributos obrigatórios

| Elemento               | Descrição                                                     |
| ---------------------- | ------------------------------------------------------------- |
| `aria-disabled="true"` | Para fins de acessibilidade se o card estiver desabilitado    |

### Atributos opcionais

| Atributo   | Tipo   | Valor padrão | Descrição                             |
| ---------- | ------ | ------------ | ------------------------------------- |
| `flipped`  | String | "off"        | Incluir para Cards do tipo "flip"     |
| `expanded` | String | "off"        | Incluir para Cards do tipo "expansão" |

### Estados

| Estado     | Propriedade | Valores |
| ---------- | ----------- | ------- |
| `disabled` | Boolean     | false   |

### Javascript

```javascript
class BRCard { ... }
```

#### Configurações obrigatórias

| Classe   | Descrição                                |
| -------- | ---------------------------------------- |
| `flip`   | Incluir no `button` que trata o flip     |
| `expand` | Incluir no `button` que trata a expansão |

#### Configurações Adicionais

| Atributo           | Descrição                                |
| ------------------ | ---------------------------------------- |
| `draggable="true"` | Incluir para a funcionalidade de arraste |

## Dependências

| Internas                            | Externas |
| ----------------------------------- | -------- |
| [dropzone](/ds/components/dropzone) |          |
