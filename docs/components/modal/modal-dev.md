## Dependências

O componente deve ser encapsulado pelo componente scrim do tipo foco para que seja visualizado corretamente. Para abrir, controla-se a classe "is-active" por meio de um script.

```html
<div class="br-scrim is-foco">
    ...
</div>
```

## Código básico

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título</h2>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

## Código básico com ícone de cancelar (X)

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título</h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

## Detalhamento

Este componente é formado pelos seguintes elementos:

-   `br-modal` : container do componente
-   `br-modal-dialog` : caixa de diálogo do modal (card).
-   `br-modal-header` : caixa de cabeçaçho do modal.
-   `br-modal-body` : caixa de conteúdo do modal.
-   `br-modal-footer` : caixa de rodapé/ações do modal.

## Variações de tamanho

Estão disponíveis 4 tamanhos de modais. Cada tamanho é aplicado com o prefixo `is-` :

-   Muito pequeno `is-xsmall`
-   Pequeno `is-small`
-   Medio `is-medium`
-   Grande `is-large`

### Modal muito pequeno

O modal **Muito pequeno** ocupa o mínimo/máximo de 3 colunas (220px)

Exemplo de uso:

```html
<div class="br-modal is-xsmall">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título</h2>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

### Modal pequeno

O modal **Pequeno** ocupa o mínimo/máximo de 300px.

Exemplo de uso:

```html
<div class="br-modal is-small">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título</h2>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

### Modal médio

O modal **Médio** ocupa o mínimo/máximo de 500px.

Exemplo de uso:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título</h2>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

### Modal largo

O modal **Largo** ocupa o mínimo/máximo 8 colunas(640px).

Exemplo de uso:

```html
<div class="br-modal is-large">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título</h2>
            </div>
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

## Anatomia

### Título

O modal pode ter ou não um **Título** de acordo com a necessidade. Para remover o cabeçalho/título de um modal basta remover o elemento `br-modal-header` e seu conteúdo, que possui o seguinte código:

```html
<div class="br-modal-header">
    <h2 class="br-modal-title">Título</h2>
</div>
```

Exemplo de modal sem título:

```html
<div class="br-modal is-large">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-body">
                <p>Conteúdo</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

#### Modal com título contraído

O modal pode ter ou não um **Modal com título contraído** de acordo com a necessidade. Para que o modal tenha um título contraído deve ser aplicado a class `is-contracted` . Dessa forma os títulos do modal não poderão quebrar para um segunda linha. Títulos maiores que duas linhas serão contraídos com reticências, e ao passar o mouse sobre o texto contraído é revelado o texto completo pelo uso de um componente <a href="/componentes/tooltip">tooltip</a>.

Exemplo de modal com título contraído:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title is-contracted">
                    Modal de exemplo com uso de uma linha
                </h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <p>
                    Texto com uma linha Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

### Conteúdo

O Conteúdo pode ter várias representações de acordo com tipo de **modal** utilizado. Utilize o modal que mais se adeque a necessidade da interface.

## Tipos de modal

Existem 3 Tipos de modal: **Alerta**, **Opção** e de **Entrada**. A escolha vai depender da tarefa que o usuário deve realizar.

### Modal de Alerta

Interrompem os usuário com informações, detalhes ou ações urgentes.

Exemplo de **Modal de Alerta** com título:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Título da modal</h2>
            </div>
            <div class="br-modal-body">
                <p>Modal de alerta com título. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

Exemplo de **Modal de Alerta** sem título:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-body">
                <p>
                    Modal de alerta sem título Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Ação 1
                </button>
                <button class="br-button is-small" type="button" primary>
                    Ação 2
                </button>
            </div>
        </div>
    </div>
</div>
```

### Modal de Opção

Oferece opções de escolha para o usuário, podendo ser apresentado por uma lista ou por algum componente de seleção (dependendo da finalidade da tarefa).

#### Por Lista:

Exibem uma lista de itens que entram em vigor imediatamente quando selecionados.

Exemplo de Modal de Opção por **Lista**:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Escolha uma conta</h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <div class="br-form">
                    <div class="field">
                        <div class="br-select">
                            <label for="simples">Opções</label>
                            <select id="simples">
                                <option value="0">Selecione uma opção</option>
                                <option value="opcao-1">opção 1</option>
                                <option value="opcao-2">opção 2</option>
                                <option value="opcao-3">opção 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Cancelar
                </button>
                <button class="br-button is-small" type="button" primary>
                    Retornar
                </button>
            </div>
        </div>
    </div>
</div>
```

#### Por Seleção:

Exige que o usuário confirme uma opção antes que ela seja submetida, permitindo uma chance de alterar sua escolha caso necessário. Uma vez confirmada, a ação será executada.

Exemplos de Modal de Opção **por Seleção**:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Buscar pelos estados</h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <div class="br-form">
                    <div class="field">
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" />
                            <label for="v-checkbox-padrao">Acre(AC)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" checked />
                            <label for="v-checkbox-padrao">Alagoas(AL)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" />
                            <label for="v-checkbox-padrao">Amapá(AP)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" />
                            <label for="v-checkbox-padrao">Amazonas(AM)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" checked />
                            <label for="v-checkbox-padrao">Bahia(BA)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" />
                            <label for="v-checkbox-padrao">Ceará(CE)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" />
                            <label for="v-checkbox-padrao">Distrito Federal (DF)</label>
                        </div>
                        <div class="br-check d-block">
                            <input type="checkbox" id="v-checkbox-padrao" />
                            <label for="v-checkbox-padrao">Espírito Santo (ES)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Cancelar
                </button>
                <button class="br-button is-small" type="button" primary>
                    Retornar
                </button>
            </div>
        </div>
    </div>
</div>
```

```html
<div class="br-modal is-medium mt-9">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Opções de Visualização</h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <div class="br-form">
                    <div class="field">
                        <div class="br-check d-block">
                            <input name="v-radio" type="radio" id="v-radio-padrao" />
                            <label for="v-radio-padrao">Fotos</label>
                        </div>
                        <div class="br-check d-block">
                            <input name="v-radio" type="radio" id="v-radio-padrao" checked />
                            <label for="v-radio-padrao">Filmes</label>
                        </div>
                        <div class="br-check d-block">
                            <input name="v-radio" type="radio" id="v-radio-padrao" />
                            <label for="v-radio-padrao">Áudio</label>
                        </div>
                        <div class="br-check d-block">
                            <input name="v-radio" type="radio" id="v-radio-padrao" />
                            <label for="v-radio-padrao">Todas</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Cancelar
                </button>
                <button class="br-button is-small" type="button" primary>
                    Retornar
                </button>
            </div>
        </div>
    </div>
</div>
```

### Modal de Entrada

Contém ações que requerem uma série de tarefas para serem concluídas tais como campos de entrada, de escolha e outros componentes ligados a formulário.

Exemplos de **Modal de Entrada**:

```html
<div class="br-modal is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Autenticar pelo Gov.br</h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <div class="br-form">
                    <div class="field">
                        <div class="br-select">
                            <label for="simples">Domínio da autenticação</label>
                            <select id="simples">
                                <option value="0">Governo Federal do Brasil (Gov.br)</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <div class="br-input">
                            <label for="simples">Usuário</label>
                            <input
                                id="simples"
                                type="text"
                                placeholder="Nome do usuário ou E-mail"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="br-input has-icon">
                            <label for="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Digite sua senha de 8 a 11 dígitos"
                            />
                            <button
                                class="icon"
                                type="button"
                                onclick="toggleInputAction(this, 'is-action')"
                            >
                                <span class="sr-only">Mostrar senha</span>
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <a href="javascript:void(0);">Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Cancelar
                </button>
                <button class="br-button is-small" type="button" primary>
                    Entrar
                </button>
            </div>
        </div>
    </div>
</div>
```

```html
<div class="br-modal is-large mt-9">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Novo evento</h2>
                <button type="button" class="close" data-dismiss="br-modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="br-modal-body">
                <div class="br-form">
                    <div class="field">
                        <div class="row align-items-end">
                            <div class="col">
                                <div class="field">
                                    <div class="br-input">
                                        <label for="simples3">Nome do evento</label>
                                        <input
                                            id="simples3"
                                            type="text"
                                            placeholder="Digite o nome do evento"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="field">
                                    <div class="br-check d-block">
                                        <input type="checkbox" id="v-checkbox-padrao8" checked />
                                        <label for="v-checkbox-padrao8">Marcar como ocupado</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-end">
                        <div class="col-6">
                            <div class="field">
                                <div class="br-input has-icon">
                                    <label for="data">Inicial</label>
                                    <input
                                        type="date"
                                        id="data"
                                        placeholder="Quinta, 13 de setembro de 2019"
                                    />
                                    <button class="icon" type="button">
                                        <i class="fas fa-calendar"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="field">
                                <div class="br-select">
                                    <label for="simples4">Hora Inicial</label>
                                    <select id="simples4">
                                        <option value="0">11:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-end">
                        <div class="col-6">
                            <div class="field">
                                <div class="br-input has-icon">
                                    <label for="data1">Final</label>
                                    <input type="date" id="data1" placeholder="Data final" />
                                    <button class="icon" type="button">
                                        <i class="fas fa-calendar"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="field">
                                <div class="br-select">
                                    <label for="simples5">Hora Final</label>
                                    <select id="simples5">
                                        <option value="0">12:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Cancelar
                </button>
                <button class="br-button is-small" type="button" primary>
                    Entrar
                </button>
            </div>
        </div>
    </div>
</div>
```

### Modal com Rolagem

Evite rolagem na modal. Quando necessária, o título é fixado na parte superior, com os botões fixados na parte inferior.
Um efeito de sombra é colocado na divisão entre o título e os botões.

Para transformar um modal em **Modal de Rolagem** a class `is-scroll` deve ser adicionada na caixa principal do modal, ficando dessa forma: `<div class="br-modal is-scroll is-medium">` .

Exemplo de **Modal com Rolagem**:

```html
<div class="br-modal is-scroll is-medium">
    <div class="br-modal-dialog">
        <div class="br-modal-content">
            <div class="br-modal-header">
                <h2 class="br-modal-title">Concorda com os termos?</h2>
            </div>
            <div class="br-modal-body mb-5">
                <div class="br-card">
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris id gravida
                    nulla. Cras sagittis dapibus felis vitae semper. Donec vel hendrerit ante. Etiam
                    sed blandit nisi. Praesent iaculis, nisl eget rutrum vehicula, lacus tortor
                    feugiat diam, et euismod lacus metus eget nisi. Sed fermentum, nunc nec
                    efficitur pharetra, felis dolor feugiat massa, et semper turpis felis quis
                    ligula. Quisque non metus at risus maximus ultrices. Nam vel massa tellus.
                    Vestibulum lobortis dui et pellentesque porta. Cras rhoncus augue a mauris
                    porttitor, in malesuada metus eleifend. Praesent ac lacinia lorem. Sed cursus
                    nisl ligula, vel ultrices ex pellentesque eu. Curabitur facilisis egestas
                    libero, non pharetra lacus ultricies quis. Mauris non finibus justo, eu varius
                    metus. Donec nec eros semper, consequat turpis id, fermentum dolor.
                </div>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button is-small" type="button" secondary>
                    Negar
                </button>
                <button class="br-button is-disabled is-small" type="button" primary>
                    Aceitar
                </button>
            </div>
        </div>
    </div>
</div>
```
