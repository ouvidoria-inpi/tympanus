# Design System

Este repositório concentra os componentes, documentações e templates do Design System do Governo Federal.

Como iniciar a criação de um novo trabalho neste repositório:

1 - Clone o repositório

```git
git clone git@git.serpro:ds-gov/design-system.git
```

2 - Entre na pasta do clone e execute os comandos:

```node
npm run init
```

3 - No Visual Studio code execute o comando (CTRL + P):

```node
ext install ritwickdey.LiveServer
```

> Mais informações sobre a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

4 - Para executar o projeto execute o comando

```node
npm run start
```

5 - Abra a pasta **dist** e clique com o botão direito em cima da página html do componente/templates que você está alterando.

6 - Aguarde a abertura do navegador com a página solicitada

## Testando o Projeto

### Iniciar o ambiente de testes

```node
npm run start:test
```

### Iniciar o cypress

```node
npm run cypress:interface
```

### Endereço do servidor

[http://localhost:9000](http://localhost:9000)
