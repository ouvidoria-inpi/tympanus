# Como começar

Carregue as folhas de estilo do Deseign System de Governo dentro da tag `<head>` da sua página ou aplicação.

```html
<link rel="stylesheet" href="dsgov-base.min.css">
<link rel="stylesheet" href="dsgov-components.min.css">
<link rel="stylesheet" href="dsgov-templates.min.css">
```

Alguns componentes possuem scripts para funcionar. Neste caso, carregue-os no final da tag `<body>`.

Exemplo de uso:

```html
<body>
  ...
  <script src="componentex.js"></script>
</body>
```

## Informações básicas

Inclua as seguintes configurações em seu código para manter a consistência visual em suas páginas e aplicações.

No cabeçalho das páginas configure o idioma para "português do Brasil", inclua a codificação UTF-8 e o viewport compatível com dispositivos móveis.

Exemplo de uso:

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
    <script src="componentex.js"></script>
  </body>
</html>
```

## Componentes disponíveis

Acesse a sessão **Componentes** no menu principal e veja a lista de componentes disponíveis.

Cada componente possui sua documentação, código fonte e preview.

## Templates básicos

Acesse a sessão **Templates** no menu principal para ver os templates disponíveis. Você poderá ver um _preview_ ou copiar seu código.
