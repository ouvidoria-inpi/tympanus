## Dependências

Nenhuma dependência.

## Código básico

``` html
<div class="br-wizard">
    <div class="wizard-progress">
        <button class="wizard-progress-btn" type="button" title="Título 1" active><span class="info">Título 1</span></button>
        <button class="wizard-progress-btn" type="button" title="Título 2"><span class="info">Título 2</span></button>
        <button class="wizard-progress-btn" type="button" title="Título 3"><span class="info">Título 3</span></button>
    </div>
    <div class="wizard-form">
        <div class="wizard-panel" active>
            <div class="content">
                <div class="h3">Título 1</div>
                <div class="text">Conteúdo aqui</div>
            </div>
            <div class="wizard-panel-btn">
                <button class="br-button is-primary wizard-btn-next" type="button">Avançar
                </button>
            </div>
        </div>
        <div class="wizard-panel">
            <div class="content">
                <div class="h3">Título 2</div>
                <div class="text">Conteúdo aqui</div>
            </div>
            <div class="wizard-panel-btn">
                <button class="br-button is-secondary wizard-btn-prev" type="button">Voltar
                </button>
                <button class="br-button is-primary wizard-btn-next" type="button">Avançar
                </button>
            </div>
        </div>
        <div class="wizard-panel">
            <div class="wizard-panel-content">
                <div class="h3">Título 3</div>
                <div class="text">Conteúdo aqui</div>
            </div>
            <div class="wizard-panel-btn">
                <button class="br-button is-secondary wizard-btn-prev" type="button">Voltar
                </button>
                <button class="br-button is-primary wizard-btn" type="button">Avançar
                </button>
            </div>
        </div>
    </div>
</div>
```

# Anatomia do componente

Este componente é formado pelos seguintes elementos obrigatórios:

* `br-wizard` : container do componente
* `wizard-progress` : container dos botões numerados de passos
* `wizard-progress-btn` : classe para os botões numerados de passos
* `info` : tag interna do botão de passo contendo sua descrição
* `wizard-form` : container para o formulario html
* `wizard-panel` : painel que alterna ao selecionar/clicar o passo
* `wizard-panel-content` : container para o conteúdo do passo
* `wizard-panel-btn` : container para os botões de avançar, voltar e finalizar
* `wizard-btn-prev` : classe para o botão voltar (acionado pelo script para a ação de voltar)
* `wizard-btn-next` : classe para o botão avançar (acionado pelo script para a ação de avançar)
* `wizard-btn` : classe para o botão finalizar (botão neutro deve ser usado no último passo - não acionado pelo script)

# Estados

Este componente apresenta os seguintes estados aplicados:

## Estados dos Botões de passos

* `active` : visual do botão de passos para a etapa atual
* `inactive` : visual do botão de passos para a etapa concluida
* `disabled` : visual do botão de passos para a etapa desabilitada (desabilita a ação do botão)

Esses estados podem ser aplicados unicamente, escrevendo o nome do atributo ao elemento `wizard-progress-btn` e são modificados pelo script do componente mediante sua navegação.

Exemplo de uso:

``` html
<div class="wizard-progress">
    <button class="wizard-progress-btn" type="button" title="Dados Pessoais" inactive><span class="info">Dados Pessoais</span></button>
    <button class="wizard-progress-btn" type="button" title="Validar Dados" active><span class="info" active>Validar Dados</span></button>
    <button class="wizard-progress-btn" type="button" title="Habilitar Cadastro"><span class="info">Habilitar Cadastro</span></button>
    <button class="wizard-progress-btn" type="button" title="Cadastrar Senha" disabled><span class="info">Cadastrar Senha</span></button>
</div>
```

## Estados da Barra de Botões

* `scroll` : determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel. Quando omitido os botões tentarão se encaixar na área visível da tela
* `collapsed` : versão compacta da barra, utilizada para otimizar a visualização em dispositivos móveis (é controlada pelo script do componente)
* `vertical` : versão vertical da barra de botões, quando omitido será adotada a barra horizontal (padrão)
* `step` : deve ser atribuído a um número, determina qual passo será previamente selecionado

Esses estados podem ser aplicados diretamente escrevendo ou omitindo os atributos ao elemento `br-wizard` .

Exemplo de uso:

``` html
<div class="br-wizard" scroll step="1" collapsed vertical>
    <div class="wizard-progress">
        <button class="wizard-progress-btn" type="button" title="Dados Pessoais" inactive><span class="info">Dados Pessoais</span></button>
        <button class="wizard-progress-btn" type="button" title="Validar Dados" inactive><span class="info">Validar Dados</span></button>
        <button class="wizard-progress-btn" type="button" title="Habilitar Cadastro" active><span class="info">Habilitar Cadastro</span></button>
        <button class="wizard-progress-btn" type="button" title="Cadastrar Senha"><span class="info">Cadastrar Senha</span></button>
    </div>
</div>
```

# Regras especiais

* Quando houver a necessidade de se utilizar muitos passos, recomenda-se o uso do atributo `scroll` exemplificado nos `Estados da Barra de Botões` , caso contrário deve-se omitir o atributo pois os botões ajustar-se-ão automaticamente ao tamanho da tela.
* No layout horizontal, quando em um dispositivo móvel (mobile), o texto de descrição do passo (info) será automaticamente mostrado e ocultado ao interagir com a Barra de Botões. Já na versão vertical o mesmo se apresenta ocultado por padrão e deve-se realizar a ação de deslizar (swipe) da esquerda para a direita a fim de visualizá-lo.

