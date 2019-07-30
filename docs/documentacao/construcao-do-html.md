# Construção do HTML

Esse documento propõe um padrão de codificação para a linguagem **HTML5**.

## A Linguagem HTML5

A linguagem HTML é definida pelo [World Wide Web Consortium - W3C][1] e sua especificação técnica e diretrizes estão publicadas na seção de Web Design e Applications.

Atualmente o documento que especifíca a linguagem HTML é o [W3C Recomendations - HTML5.2][2].

Observe que a versão da linguagem HTML nessa especificação é 5.2. Porém iremos referenciá-la apenas por **HTML5**.

## Padrão de Codificação HTML

A seguir é apresentado o padrão de codificação HTML utilizado no design system de governo. Sua intenção é estabelecer um código HTML com qualidade, facilitando a colaboração e a infraestrutura de suporte.

### Documento HTML

-   Especificar o **DOCTYPE** para a linguagem **HTML5**

```html
<!DOCTYPE html>
```

-   Definir a \*\*Língua"" no elemento `html`

```html
<html lang="pt-BR"></html>
```

-   Incluir as tags `head` e `body`

```html
<head>
    ...
</head>
<body>
    ...
</body>
```

-   Definir a **codificação de caracteres** para **UTF-8**

```html
<meta charset="UTF-8" />
```

-   Incluir a **viewport** com layout igual à lagura do dispositivo e escala 1:1

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

-   Incluir **modo de compatibilidade** para o Internet Explorer.

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

> Essa _meta tag_, que é exclusiva para Internet Explorer, define o modo de documento [X-UA-Compatible][3] que permite determinar em qual versão do Internet Explorer a página será renderizada.
>
> `content="id=edge"` diz ao Internet Explorer para usar o modo mais alto disponível para aquela versão do Internet Explorer.

-   Incluir a tag `title`

```html
<title>Título do Documento</title>
```

-   Esqueleto do documento HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Título do Documento</title>
    </head>
    <body></body>
</html>
```

### Comentários

-   Se o comentário ocupar apenas **uma linha**, incluí-lo **na mesma linha das tags de abertura e fechamento de comentários** e inserir **espaço** antes e depois do comentário

```html
<!-- Comentário de uma linha -->
```

-   Se o comentário ocupar **multiplas linhas**, incluí-lo **entre as tags de abertura e fechamento de comentário** em suas **próprias linhas** e **SEM identação**

```html
<!--
Isso é um comentário
que oculpa múltiplas linhas
-->
```

### Formatação

-   Identar o código usando **2 espaços** ou tabs que ocupem 2 espaços.

```html
<div>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        ...
    </ul>
</div>
```

-   **NÃO identar** as tags `head` e `body` em relação à tag `html`

```html
<html>
    <head>
        <title></title>
    </head>
    <body>
        <h1></h1>
    </body>
</html>
```

-   Escrever as tags e os atributos em **minúsculo**

```html
<div id="input-box" class="extra-large">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" name="email" class="input-text" />
</div>
```

-   Fechar tags que possuem **tags de fechamento correspondente**

```html
<label for="email" class="form-label">Email</label>
```

-   NÃO fechar tags de **fecho automático**

```html
<input type="email" id="email" name="email" class="input-text" />
```

-   Escrever os valores dos atributos entre **aspas duplas**

```html
<label for="full-name">Nome</label>
<input type="text" id="full-name" name="full-name" class="form-input" placeholder="Nome Completo" />
```

-   NÃO incluir valor nos **atributos boleanos**

```html
<label for="comment">Comentário</label> <input type="text" id="comment" name="comment" disabled />
```

-   Omitir **atributos de tipo e linguagem** nas tags `script`

```html
<script src="//script.js">
```

-   Omitir **atributos de tipo** na tag `link`

```html
<link rel="stylesheet" href="//style.css" />
```

-   Escrever **estilos e scripts** em seus próprios arquivos

```html
<link rel="stylesheet" href="//style.css">
<script src="//script.js">
```

## Referências

-   [World Wide Web Consortium - W3C][1]
-   [W3C Recomendations - HTML5.2][2]
-   [X-UA-Compatible][3]

[1]: https://www.w3.org/
[2]: https://www.w3.org/TR/2017/REC-html52-20171214/
[3]: https://www.lifewire.com/xua-compatible-meta-tag-3469059
