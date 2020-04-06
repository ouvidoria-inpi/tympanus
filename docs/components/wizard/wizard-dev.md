# wizard

O Componente de wizard  permite que seu aplicativo aceite um valor de texto potencialmente longo do usuário.


## Dependências

Nenhuma dependência.

## Código básico

```html
<div class="br-wizard">
  <div class="wizard-progress">
    <button class="wizard-progress-btn is-active" type="button" title="Título 1" step="1"><span class="info">Título 1</span></button>
    <button class="wizard-progress-btn" type="button" title="Título 2" step="2"><span class="info">Título 2</span></button>
    <button class="wizard-progress-btn" type="button" title="Título 3" step="3"><span class="info">Título 3</span></button>
  </div>
  <div class="wizard-form">
    <div class="wizard-panel is-active">
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
      <div class="content">
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

- `br-wizard`: container do componente
- `wizard-progress`: container dos botões numerados de passos
- `wizard-progress-btn`: classe para os botões numerados de passos
- `wizard-form`: container para o formulario html
- `wizard-panel`: painel que alterna ao selecionar/clicar o passo
- `wizard-panel-content`: container para o conteudo do passo
- `wizard-panel-btn`: container para os botões de avançar, voltar e finalizar
- `wizard-btn-prev`: classe para o botao voltar
- `wizard-btn-next`: classe para o botao avançar
- `wizard-btn`: classe para o botao finalizar


# Estados
Este componente apresenta os seguintes estados aplicados:

## Estados dos Botões de passos

- `active`: visual do botão de passos para a etapa atual
- `inactive`: visual do botão de passos para a etapa concluida
- `disabled`: visual do botão de passos para a etapa desabilitada

Esses estados podem ser aplicados diretamente usando o prefixo `is-` ao elemento `wizard-progress-btn`.

Exemplo de uso:

```html
<div class="wizard-progress">
  <button class="wizard-progress-btn is-inactive" type="button" title="Dados Pessoais" step="1"><span class="info">Dados Pessoais</span></button>
  <button class="wizard-progress-btn is-active" type="button" title="Validar Dados" step="2"><span class="info">Validar Dados</span></button>
  <button class="wizard-progress-btn" type="button" title="Habilitar Cadastro" step="3"><span class="info">Habilitar Cadastro</span></button>
  <button class="wizard-progress-btn is-disabled" type="button" title="Cadastrar Senha" step="4"><span class="info">Cadastrar Senha</span></button>
</div>
```

## Estados da Barra de Botões

- `scroll`: determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel
- `collapsed`: versão compacta da barra, utilizada para otimizar a visualização em dispositivos móveis

Esses estados podem ser aplicados diretamente usando o prefixo `is-` ao elemento `wizard-progress`.

Exemplo de uso:

```html
<div class="wizard-progress is-scroll is-collapsed">
  <button class="wizard-progress-btn is-inactive" type="button" title="Dados Pessoais" step="1"><span class="info">Dados Pessoais</span></button>
  <button class="wizard-progress-btn is-active" type="button" title="Validar Dados" step="2"><span class="info">Validar Dados</span></button>
  <button class="wizard-progress-btn" type="button" title="Habilitar Cadastro" step="3"><span class="info">Habilitar Cadastro</span></button>
  <button class="wizard-progress-btn is-disabled" type="button" title="Cadastrar Senha" step="4"><span class="info">Cadastrar Senha</span></button>
</div>
```

# Regras especiais

Nenhuma regra especial.
