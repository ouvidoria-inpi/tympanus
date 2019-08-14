# Como começar

- No cabeçalho das páginas configure o idioma para "português do Brasil", inclua a codificação UTF-8 e o viewport compatível com dispositivos móveis.
- Carregue as folhas de estilo do Design System de Governo
- Alguns componentes possuem scripts para funcionar. Neste caso, carregue-os no final da tag `<body>`.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="dsgov-base.min.css">
    <link rel="stylesheet" href="dsgov-components.min.css">
    <link rel="stylesheet" href="dsgov-templates.min.css">
    ...
  <head>
  <body>
    ...
    <!-- Scripts de componentes -->
    <script src="componente-x.js"></script>
  </body>
</html>
```



## Documentação

Para informações mais detalhadas sobre Cores, Tipografia, etc acesse o item **Fundamentos Visuais** na navegação principal.

Caso queira precise construir templates e/ou estilos acesse o item **Boas Práticas** na navegação principal.

## Componentes disponíveis

Acesse a sessão **Componentes** no menu principal e veja a lista de componentes disponíveis.

Cada componente possui sua documentação, código fonte e preview.

## Templates básicos

Acesse a sessão **Templates** no menu principal para ver os templates disponíveis. Você poderá ver um _preview_ ou copiar seu código.
