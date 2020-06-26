<!-- Versão da doc. de DESIGN usada como base para o desenvolvimento -->
<!-- doc. design: documentação contida na release 5 - sprint 5 -->

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<div class="br-breadcrumb pt-3">
    <ul class="crumb-list">
        <li class="crumb home">
            <a href="#">
                <span class="sr-only">Página inicial</span>
                <i class="icon fas fa-home"></i>
            </a>
        </li>
        <li class="crumb">
            <i class="icon fas fa-chevron-right"></i>
            <a href="#">Página Ancestral 01</a>
        </li>
        ...
        <li class="crumb" active><
            i class="icon fas fa-chevron-right"></i>
            <span>Página Atual</span>
        </li>
    </ul>
</div>
```

#### Propriedades obrigatórias

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->


| Classe             | Descrição                         |
| ------------------ | --------------------------------- |
| `br-breadcrumb`    | Classe container do componente    |
| `pt-3`             | Margin top de 16px                |
| `crumb-list`       | Lista que contém todos os links   |
| `crumb`            | Cada link da lista                |
| `home`             | Primeiro link da lista            |
| `icon`             | Indica que é um ícone             |
| `fas`              | Necessário para fontAwesome solid |
| `fa-home`          | Ícone da página inicial           |
| `fa-chevron-right` | Ícone de hierarquia               |

| Atributo   | Tipo    | Valor padrão | Descrição                       |
| ---------- | ------- | ------------ | ------------------------------- |
| `active`   | boolean |              | Indica qual página está ativa   |

### Javascript

```javascript
class BRBreadcrumb {...}

new BRBreadcrumb('br-breadcrumb', brBreadcrumb)
```

#### Configurações obrigatórias

| Propriedad           | Tipo   | Descrição                              |
| -------------------- | ------ | -------------------------------------- |
| `br-breadcrumb`      | string | Nome do componente                     |
| brBreadcrumg         | Object | Objeto que representa um br-breadcrumb |

#### Configurações Adicionais

O componente cria automaticamente mais um item na lista que é um botão de expansão.

```html
<li class="crumb" expand>
    <button class="br-button" type="button" mini circle>
        <i class="fas fa-ellipsis-h"></i>
    </button>
</li>
```

> Não é necessário implementar esse item

| Atributo        | Tipo     | Valor padrão | Descrição                                              |
| --------------- | -------- | ------------ | ------------------------------------------------------ |
| expand          | boolead  |              | Indica que esse item ativa a funcionalidad de expansão |

## Dependências

<!-- Caso o componente dependa de algum outro ou de algo externo, listamos aqui colocando links para a documentação da dependência -->

| Internas                        | Externas |
| ------------------------------- | -------- |
| [Button](/ds/components/button) |          |