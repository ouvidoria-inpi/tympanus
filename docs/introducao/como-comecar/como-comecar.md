1. No cabeçalho das páginas configure o idioma para "português do Brasil", inclua a codificação UTF-8 e o viewport compatível com dispositivos móveis
1. Carregue as folhas de estilo do Design System de Governo
1. Alguns componentes possuem scripts para funcionar. Neste caso, carregue-os no final da tag `<body>`

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Fonte Rawline-->
        <link rel="stylesheet" href="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/1.2.2/fonts/rawline/css/rawline.css">
        <!-- Fonte Raleway-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap">
        <!-- Design System de Governo-->
        <link rel="stylesheet" href="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/1.2.2/css/dsgov.css">
        <!-- Fontawesome-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"></script>
        ...
    <head>
    <body>
        ...
        <!-- Scripts de componentes -->
        <script src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/1.2.2/js/dsgov-components.js"></script>
    </body>
</html>
```

Os arquivos do Design System podem ser baixados em <https://git.serpro/ds-gov/design-system>.

Seu projeto usa **Node**? Nesse caso inclua no arquivo **package.json** o pacote `@govbr/dsgov`.

```bash
npm set @govbr:registry=http://nexus.aic.serpro/repository/npm-private/

npm install @govbr/dsgov --save
```

## Documentação

Para informações mais detalhadas sobre Cores, Tipografia, etc acesse o item **Fundamentos Visuais** na navegação principal.

Para criação ou manutenção de páginas, templates ou estilos acesse o item **Boas Práticas** na navegação principal.

## Componentes

Acesse a sessão **Componentes** no menu principal e veja a lista de componentes disponíveis.

Cada componente possui sua documentação, código fonte e preview.

## Templates básicos

Acesse a sessão **Templates** no menu principal para ver os templates disponíveis. Você poderá ver um _preview_ ou copiar seu código.
