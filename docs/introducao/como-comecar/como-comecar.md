[version]: # '2.4.1'

## Instalação

### Requisitos

O projeto requer a versão mínima do [node](https://nodejs.org/) >= v14.15.4.

### Instalar manualmente

1. Faça o [download do Pacote NPM](/assets/design-system/assets/npm-package/govbr-ds-latest.tgz). Ele está disponível na seção Downloads
2. **Caso você tenha um projeto em andamento, pule para a etapa 4**, caso contrário crie nova pasta para o seu projeto
3. Execute o seguinte comando no terminal: `npm init -y`
4. Coloque o arquivo **govbr-ds-latest.tgz** na pasta do seu projeto
5. Execute o seguinte comando no terminal: `npm install govbr-ds-latest.tgz`

Serão criados automaticamente os seguintes arquivos em seu projeto:

-   **package.json**: configurações do seu projeto
-   **node_modules/@govbr-ds/core**: pasta com os módulos necessários para o funcionamento do Design System

### Instalar automaticamente com NPM

> Atenção! No momento o pacote está disponível apenas para a rede interna do SERPRO

**Confira sempre a versão referência ao baixar o pacote @govbr-ds/core**.

1. Execute o seguinte comando no terminal:

    ```bash
      npm set @serpro:registry=http://nexus.aic.serpro/repository/npm-private/
      npm set @govbr:registry=http://nexus.aic.serpro/repository/npm-private/
    ```

1. Execute o comando **npm install @govbr-ds/core**, exemplo:

    ```bash
    npm install @govbr-ds/core
    ```

## Template Inicial

A seguir temos um exemplo de um template inicial para utilização do Design System GOV.BR. Copie o template para um arquivo html e confira se os caminhos dos arquivos **rawline.css** e **core.min.css** estão corretos. Antes de **`</body>`** temos a chamada para o arquivo **core.min.js**, se precisar usar uma biblioteca JS já inicializada utilize **govbr-ds-init.min.js**, confira se o caminho está correto de acordo com as pastas do seu projeto.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <!-- Font Rawline-->
        <link
            rel="stylesheet"
            href="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"
        />
        <!-- Font Raleway-->
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap"
        />
        <!-- Design System GOV.BR CSS-->
        <link
            rel="stylesheet"
            href="node_modules\@govbr-ds\core\dist\core.min.css"
        />
        <!-- Fontawesome-->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
    </head>

    <body>
        <!-- Conteúdo-->

        <!-- Scripts de componentes -->
        <script src="node_modules\@govbr-ds\core\dist\core.min.js"></script>
    </body>
</html>
```

> Atenção! Certifique-se que as referências ao `css` e `js` estejam corretas e inseridas devidamentes na pasta do projeto, caso contrário ocorrerá quebra no layout. Muitas vezes, em ambiente de desenvolvimento, pode não haver os arquivos minificados, ou seja, com o posfixo `.min`.

## Versão "init" do js

Essa é a versão init(core-init.js) com os componentes já **inicializados** diferente do core.js em que precisa que a classe do js seja inicializado. Bastando trocar a linha de carregamento do javascript pelo exemplo a seguir:

```html
<script src="node_modules\@govbr-ds\core\dist\core-init.min.js"></script>
```

## Versão "lite" da folha de estilo

Você poderá usar uma versão "lite" do CSS no lugar da versão completa. No código usado em Template Inicial basta trocar a linha de carregamento do Design System GOV.BR pelo exemplo a seguir:

```html
<!-- Design System GOV.BR CSS-->
<link
   rel="stylesheet"
   href="node_modules\@govbr-ds\core\dist\core-lite.css"
/>
```

Visite [Design System GOV.BR lite](introducao/govbr-ds-lite) para saber as diferenças.

## Template Base

Um bom ponto de partida para usar o Design System GOV.BR é usar um template já com elementos básicos estruturantes da página como Cabeçalho, Menu e Rodapé. [Visite o Template Base](templates/base) na visão **Desenvolvedor** para acessar o código de referência.

## Servidor CDN

Em **Template Inicial** temos uma importação do arquivo **rawline.css** via CDN:

```html
<link
    rel="stylesheet"
    href="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"
/>
```

No momento o Servidor CDN possui capacidade suficiente para suprir apenas o desenvolvimento do projeto, não possuindo garantia de estabilidade suficiente para projetos em produção.

Para ambiente em produção:

-   Faça o [download do Pacote CDN](https://serprodrive.serpro.gov.br/s/dLZJm9soLLiPzzg) para usar os assets de fonte e imagens em produção. Ele está disponível na seção Downloads
-   Troque as referências de CDN para os arquivos locais de CSS e JS

## Documentação

Para informações mais detalhadas sobre [Cores](/fundamentos-visuais/cores), [Tipografia](/fundamentos-visuais/tipografia), etc acesse o item **Fundamentos Visuais** na navegação principal.

Para uso dos estilos ou criação de novos componentes acesse o item **Guias** na navegação principal:

-   No menu **Utilitários CSS** há utilitários para não precisar reescrever CSS em seu código
-   Em [Construção de Componentes](/guias/construcao-de-componentes) é apresentado um passo a passo de como criar um componente.

## Componentes

Acesse a seção **Componentes** no menu principal e veja a lista de componentes disponíveis.

Cada componente possui sua documentação, código fonte e preview.

### Exemplo de uso da instacialização do componente sem usar **core-init.js**

```javascript
import  * as core from '@govbr-ds/core/dist/core'
const breadcrumbList = []
for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
  breadcrumbList.push(new core.BRBreadcrumb('br-breadcrumb', brBreadcrumb))
}
```

## Release Notes

Ao final de cada release, disponibilizamos um resumo do que foi alterado desde a última release.
