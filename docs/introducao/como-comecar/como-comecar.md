## Instalação através do <a href="https://nodejs.org/">NODE</a>

1. Faça o download do pacote NPM do DSGOV na seção [Downloads](/downloads).

2. Crie uma nova pasta para o seu projeto e coloque o arquivo **`dsgov-latest.tgz`** dentro dela. Caso já tenha um projeto em andamento coloque o arquivo na pasta raiz do seu projeto.

3. Entre na pasta que você colocou o arquivo e utilize o seguinte comando para inicializar o node no seu projeto:

```bash
npm init
```

-   Preencha os questionamentos seguintes ou aperte a tecla **`enter`** em cada um para pular:

```bash
package name: (dsgov)
version: (1.0.0)
description:
git repository:
keywords:
author:
license: (ISC)
About to write to ~$/dsgov/package.json:
```

-   Ao final digite **`yes`** para confirmar e aperte a tecla **`enter`**:

```bash
{
  "name": "dsgov-testes",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@govbr/dsgov": "file:dsgov-1.2.3-beta.24.tgz"
  },
  "devDependencies": {},
  "description": ""
}

Is this OK? (yes)
```

-   O arquivo **`package.json`** será criado na pasta do seu projeto.

4. Utilize a linha de comando abaixo para realizar a instação do pacote:

```bash
npm install dsgov-latest.tgz
```

-   Após a execução completa do comando será criado a pasta **`node_modules/@govbr/dsgov`**. Essa pasta contém os módulos necessários para o funcinamento do DSGOV.

-   Na pasta **`node_modules/@govbr/dsgov/dist`** você encontra os arquivos **`dsgov.min.js`** e **`dsgov.min.css`** que podem ser utilizados no seu projeto.

## Template inicial

A seguir temos um exemplo de um template inicial para utilização do DSGOV. Copie o template para um arquivo html e confira se os caminhos dos arquivos **`rawline.css`** e **`dsgov.min.css`** estão corretos. Antes de **`</body>`** temos a chamada para o arquivo **`dsgov.min.js`** confira se o caminho está correto de acordo com as pastas do seu projeto.

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
            href="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"
        />
        <!-- Font Raleway-->
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap"
        />
        <!-- DSGOV CSS-->
        <link rel="stylesheet" href="node_modules\@govbr\dsgov\dist\css\dsgov.min.css" />
        <!-- Fontawesome-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"></script>
    </head>

    <body>
        <!-- Conteúdo-->

        <!-- Scripts de componentes -->
        <script src="node_modules\@govbr\dsgov\dist\js\dsgov.min.js"></script>
    </body>
</html>
```

### Fonts

No template inicial a font rawline é disponibilizada no nosso CDN (cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system). Esse CDN está ainda em consolidação então não garantimos a sua alta disponiblidade, sendo assim disponibilizamos uma alternativa na forma de um arquivo na seção de [Downloads](/downloads) para que possa ser utilizado em substituição ao CDN.

Fara fazer a troca do CDN para a fonte disponibilizada no pacote, baixe o pacote na seção de [Downloads](/downloads), descompacte, copie os arquivos para uma pasta no seu projeto e troque os apontamentos do CDN nos arquivos CSS e JS para o arquivo local.

## Documentação

Para informações mais detalhadas sobre <a href="/ds/fundamentos-visuais/cores">Cores</a>, <a href="/ds/fundamentos-visuais/tipografia">Tipografia</a>, etc acesse o item **Fundamentos Visuais** na navegação principal.

Para uso dos estilos ou criação de novos componentes acesse o item **Guias** na navegação principal.

## Componentes

Acesse a sessão **Componentes** no menu principal e veja a lista de componentes disponíveis.

Cada componente possui sua documentação, código fonte e preview.

## Release Notes

Ao final de cada release, disponibilizamos um resumo do que foi alterado desde a última release.
