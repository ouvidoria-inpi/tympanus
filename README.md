# Design System

Este repositório concentra os componentes, documentações e templates do Design System do Governo Federal.

Como iniciar a criação de um novo trabalho neste repositório:

1 - Clone o repositório

```
git clone git@git.serpro:ds-gov/design-system.git
```


2 - Entre na pasta do clone e execute os comandos:

```
cd design-system
npm install && npm run start
```

3 - No Visual Studio code execute o comando (CTRL + P):

```
ext install ritwickdey.LiveServer
```

> Mais informações sobre a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


4 - Abra a pasta **dist** e clique com o botão direito em cima da página html do componente/templates que você está alterando.
<br />

5 - Aguarde a abertura do navegador com a página solicitada


# Componentes

Excutar os comandos abaixo para registrar componentes que estão no nexus do serpro e depois execute o npm install

```
npm set @serpro:registry=http://nexus.aic.serpro/repository/npm-private/
```

```
npm set @govbr:registry=http://nexus.aic.serpro/repository/npm-private/
```

## Executando o projeto 

# instalar os pacotes
``` npm install ```

# iniciar o servidor de desenvolvimento
``` npm run start```

## Para testar o projeto usando cypress use os seguintes comandos

# Iniciar o ambiente de testes
``` npm run start:test ```

# Iniciar o cypress
``` npm run cypress:interface ```

# Acesso o servidor do projeto que está rodando na porta 

- http://localhost:9000
