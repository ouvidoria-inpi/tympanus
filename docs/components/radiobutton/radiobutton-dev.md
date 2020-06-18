## Como usar

### HTML

```html
<p class="label">Texto opcional para lista de Radio buttons</p>
<div class="br-radio [d-inline-block]" name="radio" [small] [disabled|invalid|valid]>
    <input id="identificador" type="radio" [disabled] />
    <label for="identificador">Label do componente</label>
</div>
<p class="feedback">...</p>
```

#### Elementos obrigatórios

| Elemento    | Tipo     | Descrição                               |
| ----------- | -------- | --------------------------------------- |
| `.br-radio` | classe   | Container do componente                 |
| `input`     | tag html | Input do tipo "radio"                   |
| `label`     | tag html | Rótulo do Radio button                  |
| `name`      | atributo | identificador de grupo de Radio buttons |

#### Elementos e atributos opcionais

| Elemento          | Tipo       | Descrição                                           |
| ----------------- | ---------- | --------------------------------------------------- |
| `.label`          | estilo     | Aplica estilo de label em textos fora do componente |
| `.feedback`       | utilitário | Texto de feedback para o componente                 |
| `.d-inline-block` | classe     | Formata o componente para versão horizontal         |
| small             | atributo   | Aplica versão reduzida do componente                |

#### Estados

| Elemento | Tipo     | Descrição                                                         |
| -------- | -------- | ----------------------------------------------------------------- |
| disabled | atributo | Desabilita o componente                                           |
| invalid  | atributo | Formata a versão inválida para o componente (usado em validações) |
| valid    | atributo | Formata a versão válida para o componente (usado em validações)   |

### Javascript

Poderá ser desenvolvido conforme a necessidade do usuário final.

#### Configurações obrigatórias

-   Utilizar o elemento com a classe `"br-radio"` e inicializar o construtor do componente.

## Dependências

Não há dependências.
