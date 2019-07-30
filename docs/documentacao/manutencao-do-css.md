# Manutenção do CSS

Esse documento é destinado para **manutenção das folhas de estilo** do DS-Gov.

Todos os estilos foram escritos usando **SCSS**. Nunca altere os arquivos de CSS do diretório `assets`, pois eles são gerados automaticamente.

## Ambiente de desenvolvimento

**Pré-requisitos**

- git
- node (versão 12)
- nvm (opcional)

**Estrutura de arquivos**

```text
repositorio/
├── assets/
│   └── ...
├── base/
│   └── ...
├── components/
│   └── ...
├── templates/
│   └── ...
├── ...
├── package.json
└── ...
```

O arquivo `package.json` possui vários scripts que auxiliam na manutenção do ambiente.

Para começar siga o passo a passo:

**Preparar ambiente de desenvolvimento**:

```bash
git clone git@git.serpro:ds-gov/componentes.git
cd componentes
npm install
npm run build
```

**Rodar watch para compilar arquivos a cada modificação**:

```bash
npm run watch
```

## Organização dos aquivos

O SCSS do DS-Gov foi dividido em partes.

```text
repositorio/
├── base/
│   ├── configs/
│   ├── mixins/
│   ├── utilities/
│   ├── _dsgov-base.scss
│   └── _tokens.scss
├── components/
│   └── ...
└── templates/
    └── ...
```

**Base**

A **Base** usa o Bootstrap como dependência.

Algumas variáveis como **cores**, **tipografia** e **espaçamentos** são gerenciadas via Design Tokens no arquivo `_tokens.scss`.

O diretório `config/` sobrescreve os valores originais do Bootstrap e contém configurações específicas do DS-Gov.

Nenhum CSS será gerado dentro do diretório `base/`. Ele será criado dentro do diretório `assets/styles/`.

**Componentes e Templates**

Todas as variáveis, mixins ou funções criadas em **Base** podem ser reutilizadas dentro dos componentes/templates bastando fazer sua importação no início do código.

Exemplo de uso:

```scss
// Arquivo components/button/button.scss

// Carregar variáveis do DS-Gov
@import "../../assets/styles/dsgov-base.scss";
...
```

Cada componente/template possui a seguinte estrutura:

- `_configs.scss`: variáveis de configuração
- `_mixins.scss`: códigos reaproveitáveis
- `CHANGELOG.md`: versionamento
- `arquivo.scss`: **carrega o css de base** e aplica `configs` e  `mixins`
- `arquivo.html`: código HTML do componente/template
- `arquivo.md`: documentação para desenvolvedor
- `arquivo-dsg.md`: documentação para designer

Para cada componente/template será gerado um arquivo individual de css em seu diretório local. Dentro de `assets/styles/` são geradas versões contendo um compilado de todos os componentes/templates.

## Regra de sintaxe para componentes

Nunca coloque valores **hard-coded** diretamente em `_mixins.scss` ou `arquivo.scss`. Crie variáveis dentro de `_configs.scss` para manter seu código reusável.

Sempre que possível use as variáveis definidas em `base/_tokens.scss` no seu código. Estão definidos valores de cores, tipografia, espaçamentos etc.

Todo componente do DS-Gov deve possuir prefixo. Este prefixo está configurado em `base/configs/_prefix.scss`.

```scss
// Arquivo components/button/button.scss
...
.#{$prefix}button { ... }
```

Variações do componente devem ser aplicadas usando o prefixo `is-`.

```scss
// Arquivo components/button/button.scss
...
.#{$prefix}button {
  // Primário
  &.is-primary { ... }
  // Secundário
  &.is-secondary { ... }
  ...
}
```

Estados do componente também devem usar prefixo.

```scss
// Arquivo components/input/input.scss
...
.#{$prefix}input {
  ...
  // Válido
  &.is-valid { ... }
  // Inválido
  &.is-invalid { ... }
  ...
}
```

Assim como variações de tamanho.

```scss
// Arquivo components/select/select.scss
...
.#{$prefix}select {
  ...
  // Médio
  &.is-medium { ... }
  // Pequeno
  &.is-small { ... }
  ...
}
```

### Tabela de prefixos

Componente | Tipo | Cor | Estado | Tamanho
--- | --- | --- | ---| ---
**accordeon** | tipo único | cor única | `is-active` (usado em linha ativa) | tamanho único
**breadcrumb** | tipo único | cor única | `is-active` (usado em crumb ativo) | tamanho único
**button** | `is-primary`<br>`is-secondary`<br>`is-tertiary`<br> `is-cancel`<br>`is-call-to-action`<br>`is-circle`<br>`is-social-media`<br>`is-go-top`<br>`is-filter` | `is-facebook`<br>`is-twitter` | `is-focus`<br>`is-hover`<br>`is-disabled`<br>`is-loading` | tamanho único
**checkbox** | sem prefixo<br>`input[type="checkbox"]`<br>`input[type="radio"]` | cor única | `is-focus`<br>`is-hover`<br>`is-disabled`<br>`is-valid`<br>`is-invalid` | tamanho único
**checklist** | tipo único | cor única | (usado em linha ativa)<br>`is-active`<br>(usado no componente e na linha)<br>`is-valid` <br>`is-invalid` | tamanho único
**form** | (usados nos botões dentro de `actions`)<br>`is-primary`<br>`is-secondary`<br>`is-tertiary`<br> `is-cancel` | cor única | (usados em `field`)<br>`is-focus`<br>`is-valid`<br>`is-invalid`<br>(usados nos botões dentro de `actions`)<br>`is-loading` | tamanho único
**input** | (o padrão não precisa de prefixo)<br>`is-action`<br>`is-autocomplete` | cor única | `is-focus`<br>`is-valid`<br>`is-invalid` | tamanho único
**pagination** | `is-first`<br>`is-last` | cor única | `is-active` (usado em página ativa)<br>`is-disabled` (usar para desativar link) | (o padrão não precisa de prefixo)<br>`is-large`
**select** | tipo único | cor única | `is-focus`<br>`is-valid`<br>`is-invalid` | (o padrão não precisa de prefixo)<br>`is-medium`<br>`is-small`
**tabs** | o padrão é horizontal<br>`is-vertical` | cor única | `is-active` (usado na aba ativa) | tamanho único
