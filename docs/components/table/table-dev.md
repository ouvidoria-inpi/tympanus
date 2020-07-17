# Dependências

O componente table, na sua versão atual depende dos seguinte componentes:

-   Button
-   Checkbox
-   Input
-   Select

## Código

```html
<div class="br-table mt-5 is-datatable is-checkbox" id="datatable-checkbox">
    <div class="header">
        <div class="top-bar">
            <div class="title">Datatable com checkbox</div>
            <div class="grid-button">
                <button class="br-button grid-small-trigger" type="button" circle>
                    <i class="fas fa-th"></i>
                </button>
            </div>
            <div class="grid-button">
                <button class="br-button grid-large-trigger" type="button" circle>
                    <i class="fas fa-th-large"> </i>
                </button>
            </div>
            <div class="divisor"></div>
            <div class="search-button">
                <button class="br-button search-trigger" type="button" circle>
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="search-bar">
            <div class="br-input search-input is-medium has-icon">
                <label for="datatable-checkbox-search-input">Buscar</label>
                <input
                    class="search-input is-medium has-icon"
                    id="datatable-checkbox-search-input"
                    type="text"
                    placeholder="Buscar na tabela"
                />
                <button class="icon" type="button">
                    <span class="sr-only">Buscar</span><i class="fas fa-search"></i>
                </button>
            </div>
            <button class="br-button search-close ml-1" type="button" circle>
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="selected-bar">
            <div class="info">
                <button class="br-button mobile select-all" type="button" primary>
                    <i class="fas fa-minus-square"></i></button
                ><span class="count">0</span><span class="text">item selecionado</span>
            </div>
            <div class="action-button">
                <button class="br-button delete-trigger" type="button" primary>
                    <span>Excluir</span><i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="action-button">
                <button class="br-button download-trigger" type="button" primary>
                    <span>Download</span><i class="fas fa-download"></i>
                </button>
            </div>
            <div class="action-button mobile">
                <button class="br-button" type="button" primary>
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="responsive">
        <table>
            <thead>
                <tr>
                    <th scope="col" style="width: 54px;">
                        <div class="br-checkbox" name="check">
                            <input id="datatable-checkbox-check-all" type="checkbox" />
                            <label for="datatable-checkbox-check-all"></label>
                        </div>
                    </th>
                    <th scope="col">Coluna 1</th>
                    <th scope="col">Coluna 2</th>
                    ...
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="br-checkbox" name="check">
                            <input id="datatable-checkbox-line-1" type="checkbox" />
                            <label for="datatable-checkbox-line-1"></label>
                        </div>
                    </td>
                    <td data-th="Coluna 1">ag3r4hn0 mu950l22 ewbyhv</td>
                    <td data-th="Coluna 2">tmsrx0pv u8fu96db 6ol3o</td>
                    ...
                </tr>
                <tr>
                    <td>
                        <div class="br-checkbox" name="check">
                            <input id="datatable-checkbox-line-2" type="checkbox" />
                            <label for="datatable-checkbox-line-2"></label>
                        </div>
                    </td>
                    <td data-th="Coluna 1">rzif491q ox7f6d9c bvlp4</td>
                    <td data-th="Coluna 2">pnk1fyp0 rjcl04lv epkjao</td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>
    <div class="footer">
        <div class="bottom-bar">
            <div class="items">
                <span>Exibir:</span>
                <div class="br-select is-small">
                    <label for="datatable-checkbox-items"></label>
                    <select id="datatable-checkbox-items">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <span class="divider"></span><span>1-10 de 50 itens</span>
            </div>
            <div class="pagination">
                <div class="selectors">
                    <div class="br-select is-small">
                        <label for="datatable-checkbox-pagination"></label>
                        <select id="datatable-checkbox-pagination">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <span>de 3 páginas</span><span class="divider"></span>
                </div>
                <div class="arrows">
                    <button class="br-button" type="button" circle secondary>
                        <i class="fa fa-chevron-left"></i>
                    </button>
                    <button class="br-button" type="button" circle secondary>
                        <i class="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

-   `br-table` : container do componente
-   `is-checkbox`: necessário se a tabela contiver checkbox
-   `header`: barra superior
-   `search-bar`: barra de busca
-   `selected-bar`: itens de ação
-   `responsive`: para a tabela se comportar de forma responsiva
-   `footer`: representa o rodapé da tabela
-   `pagination`: mostra a paginação
-   `arrows`: mostra as setas para navegar pela paginação
