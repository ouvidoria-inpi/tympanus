Esse documento é destinado para manutenção das folhas de estilo do DS-Gov.

Todos os estilos foram escritos usando **Sass**. Eles são compilados em CSS.

## Pré-requisitos

-   git
-   node (versão 12)
-   nvm (opcional)

## Ambiente de desenvolvimento

Preparar ambiente de desenvolvimento:

```bash
git clone git@git.serpro:ds-gov/design-system.git
cd design-system
npm install
npm start
```

## Organização dos aquivos

O SCSS do DS-Gov foi dividido em partes.

```text
design-system/
└── src/
    └── scss/
        ├── components/
        ├── configs/
        ├── functions/
        ├── mixins/
        ├── templates/
        └── utilities/
```

## Configs

Nesta pasta estão todos os Tokens (variáveis) descritos na documentação de **Fundamentos Visuais**. Cada Token está criado em seu arquivo correspondente para facilitar a manutenção.

> Nenhuma regra de escrita de CSS deve ser colocada nesta pasta.

**Componentes e Templates**

Todas as variáveis, mixins ou funções criadas em **Base** podem ser reutilizadas dentro dos componentes/templates bastando fazer sua importação no início do código.

Exemplo de uso:

```scss
// Arquivo components/button/button.scss

// Carregar variáveis do DS-Gov
@import "design-system/base/dsgov-base.scss";
...
```

Cada componente/template possui a seguinte estrutura:

-   `_configs.scss`: variáveis de configuração
-   `_mixins.scss`: códigos reaproveitáveis
-   `CHANGELOG.md`: versionamento
-   `arquivo.scss`: **carrega o css de base** e aplica `configs` e `mixins`
-   `arquivo.html`: código HTML do componente/template
-   `arquivo.md`: documentação para desenvolvedor
-   `arquivo-dsg.md`: documentação para designer

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
