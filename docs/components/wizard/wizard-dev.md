[version]: # (4.2.1)

## Como usar

```html
<div class="br-wizard">
    <div class="wizard-progress">
        <button class="wizard-progress-btn" type="button" title="Título 1" active>
            <span class="info">Título 1</span>
        </button>
        <button class="wizard-progress-btn" type="button" title="Título 2">
            <span class="info">Título 2</span>
        </button>
        <button class="wizard-progress-btn" type="button" title="Título 3">
            <span class="info">Título 3</span>
        </button>
    </div>
    <div class="wizard-form">
        <div class="wizard-panel" active>
            <div class="content">
                <div class="h3">Título 1</div>
                <div class="text">Conteúdo aqui</div>
            </div>
            <div class="wizard-panel-btn">
                <button class="br-button wizard-btn-next" type="button" primary>Avançar</button>
            </div>
        </div>
        <div class="wizard-panel">
            <div class="content">
                <div class="h3">Título 2</div>
                <div class="text">Conteúdo aqui</div>
            </div>
            <div class="wizard-panel-btn">
                <button class="br-button wizard-btn-prev" type="button" secondary>Voltar</button>
                <button class="br-button wizard-btn-next" type="button" primary>Avançar</button>
            </div>
        </div>
        <div class="wizard-panel">
            <div class="wizard-panel-content">
                <div class="h3">Título 3</div>
                <div class="text">Conteúdo aqui</div>
            </div>
            <div class="wizard-panel-btn">
                <button class="br-button wizard-btn-prev" type="button" secondary>Voltar</button>
                <button class="br-button wizard-btn" type="button" primary>Avançar</button>
            </div>
        </div>
    </div>
</div>
```

### Configurações obrigatórias

| Elemento               | Tipo   | Descrição                                                                                              |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| `br-wizard`            | classe | container do componente                                                                                |
| `wizard-progress`      | classe | container dos botões numerados de passos                                                               |
| `wizard-progress-btn`  | classe | classe para os botões numerados de passos                                                              |
| `info`                 | classe | tag interna do botão de passo contendo sua descrição                                                   |
| `wizard-form`          | classe | container para o formulário html                                                                       |
| `wizard-panel`         | classe | painel que alterna ao selecionar/clicar o passo                                                        |
| `wizard-panel-content` | classe | container para o conteúdo do passo                                                                     |
| `wizard-panel-btn`     | classe | container para os botões de avançar, voltar e finalizar                                                |
| `wizard-btn-prev`      | classe | classe para o botão voltar (acionado pelo script para a ação de voltar)                                |
| `wizard-btn-next`      | classe | classe para o botão avançar (acionado pelo script para a ação de avançar)                              |
| `wizard-btn`           | classe | classe para o botão finalizar (botão neutro deve ser usado no último passo - não acionado pelo script) |

### Configurações Adicionais

| Elemento    | Tipo     | Descrição                                                                                                                                                                      |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `scroll`    | atributo | determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel. Quando omitido os botões tentarão se encaixar na área visível da tela |
| `collapsed` | atributo | versão compacta da barra, utilizada para otimizar a visualização em dispositivos móveis (é controlada pelo script do componente)                                               |
| `vertical`  | atributo | versão vertical da barra de botões, quando omitido será adotada a barra horizontal (padrão)                                                                                    |
| `step`      | atributo | deve ser atribuído a um número, determina qual passo será previamente selecionado                                                                                              |

Esses atributos podem ser aplicados diretamente escrevendo ou omitindo os atributos ao elemento `br-wizard` .

Exemplo de uso:

```html
<div class="br-wizard" scroll step="1" collapsed vertical>
    <div class="wizard-progress">
        <button class="wizard-progress-btn" type="button" title="Dados Pessoais">
            <span class="info">Dados Pessoais</span>
        </button>
        <button class="wizard-progress-btn" type="button" title="Validar Dados">
            <span class="info">Validar Dados</span>
        </button>
        <button class="wizard-progress-btn" type="button" title="Habilitar Cadastro" active>
            <span class="info">Habilitar Cadastro</span>
        </button>
        <button class="wizard-progress-btn" type="button" title="Cadastrar Senha">
            <span class="info">Cadastrar Senha</span>
        </button>
    </div>
</div>
```

## Estados

| Elemento   | Tipo     | Descrição                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------- |
| `active`   | atributo | visual do botão de passos para a etapa atual                                     |
| `disabled` | atributo | visual do botão de passos para a etapa desabilitada (desabilita a ação do botão) |

Esses estados podem ser aplicados unicamente no elemento `wizard-progress-btn`, e são modificados pelo script do componente mediante sua navegação.

Exemplo de uso:

```html
<div class="wizard-progress">
    <button class="wizard-progress-btn" type="button" title="Dados Pessoais">
        <span class="info">Dados Pessoais</span>
    </button>
    <button class="wizard-progress-btn" type="button" title="Validar Dados" active>
        <span class="info" active>Validar Dados</span>
    </button>
    <button class="wizard-progress-btn" type="button" title="Habilitar Cadastro" disabled>
        <span class="info">Habilitar Cadastro</span>
    </button>
    <button class="wizard-progress-btn" type="button" title="Cadastrar Senha" disabled>
        <span class="info">Cadastrar Senha</span>
    </button>
</div>
```

## Regras especiais

-   Quando houver a necessidade de se utilizar muitos passos, recomenda-se o uso do atributo `scroll` exemplificado nos `Estados da Barra de Botões`, caso contrário deve-se omitir o atributo pois os botões ajustar-se-ão automaticamente ao tamanho da tela.

```html

<div class="br-wizard" scroll>
    ...
</div>

```

-   No layout horizontal, quando em um dispositivo móvel (mobile), o texto de descrição do passo (info) será automaticamente mostrado e ocultado ao interagir com a Barra de Botões. Já na versão vertical o mesmo se apresenta ocultado por padrão e deve-se realizar a ação de deslizar (swipe) da esquerda para a direita a fim de visualizá-lo.

-   É necessário definir um container (div) encapsulando o componente e com altura definida (height) para que o wizard seja corretamente visualizado. Conforme exemplo a seguir:

```html
<div class="wizard-sample-1">
    <div class="br-wizard" scroll step="1" collapsed vertical>
        ...
    </div>
</div>
```

```css
.wizard-sample-1 {
    height: 500px;
}
```

## Dependências

-   [Button](/ds/components/button)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

### Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRWizard`, passando os seguintes parâmetros:

-   Nome da classe (br-wizard)
-   Objeto referenciando a raiz do componente DOM

```javascript
const wizardList = []
for (const brWizard of window.document.querySelectorAll('.br-wizard')) {
  wizardList.push(new core.BRWizard('br-wizard', brWizard))
}
```
