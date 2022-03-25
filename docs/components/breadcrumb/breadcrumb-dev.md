[version]: # (7.2.5)

## Como usar

```html
<div class="br-breadcrumb pt-3" aria-label="Breadcumb">
    <ul class="crumb-list">
        <li class="crumb home">
            <div class="br-button circle">
                <span class="sr-only">Página inicial</span>
                <i class="icon fas fa-home"></i>
            </div>
        </li>
        <li class="crumb"><i class="icon fas fa-chevron-right"></i></li>
        <li class="crumb menu-mobil">
            <div class="br-button circle">
                <span class="sr-only">Botão Menu</span>
                <i class="icon fas fa-folder-plus"></i>
            </div>
        </li>
        <li class="crumb">
            <i class="icon fas fa-chevron-right"></i>
            <a href="javascript:void(0)">Página Ancestral 01</a>
        </li>
        <li class="crumb">
            <i class="icon fas fa-chevron-right"></i>
            <a href="javascript:void(0)">Página Ancestral 02</a>
        </li>
        <li class="crumb">
            <i class="icon fas fa-chevron-right"></i>
            <a href="javascript:void(0)">Página Ancestral 03</a>
        </li>
        <li class="crumb">
            <i class="icon fas fa-chevron-right"></i>
            <a href="javascript:void(0)">Página Ancestral Com Título Grande</a>
        </li>
        <li class="crumb" data-active="active">
            <i class="icon fas fa-chevron-right"></i>
            <span>Página atual</span>
        </li>
    </ul>
</div>
```

### Propriedades obrigatórias

| Classe             | Descrição                                          |
| ------------------ | -------------------------------------------------- |
| `br-breadcrumb`    | Classe container do componente                     |
| `crumb-list`       | Lista que contém todos os links                    |
| `crumb`            | Cada link da lista                                 |
| `home`             | Primeiro link da lista                             |
| `menu-mobil`       | Botão que será um menu em modo truncado e/ou mobil |
| `icon`             | Indica que é um ícone                              |
| `fas`              | Necessário para fontAwesome solid                  |
| `fa-home`          | Ícone da página inicial                            |
| `fa-folder-plus`   | Ícone botão menu fechado                           |
| `fa-folder-minus`  | Ícone botão menu aberto                            |
| `fa-chevron-right` | Ícone de hierarquia                                |

| Atributo               | Tipo    | Valor padrão | Descrição                     |
| ---------------------- | ------- | ------------ | ----------------------------- |
| `data-active="active"` | boolean | active       | Indica qual página está ativa |

### Configurações obrigatórias

| Propriedade     | Tipo   | Descrição                              |
| --------------- | ------ | -------------------------------------- |
| `br-breadcrumb` | string | Nome do componente                     |
| brBreadcrumb    | Object | Objeto que representa um br-breadcrumb |

## Dependências

- [Button](/components/button)

## Instanciação do Componente

### HTML

Incluir o arquivo `dsgov.min.js` no html.

```html
<script src="<node_modules>/@govbr/dsgov/dist/dsgov.min.js"></script>
```

> O arquivo dsgov.min.js expõe um objeto chamado `dsgov` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRBreadcrumb`, passando os seguintes parâmetros:

- Nome da classe (br-breadcrumb)
- Objeto referenciando a raiz do componente DOM

```javascript
const breadcrumbList = []
for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
  breadcrumbList.push(new dsgov.BRBreadcrumb('br-breadcrumb', brBreadcrumb))
}
```
