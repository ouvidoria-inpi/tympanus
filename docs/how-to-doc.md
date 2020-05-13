# Documentação de Desenvolvedor

-   [Introdução](#introdu%c3%a7%c3%a3o)
    -   [Recomendações para criação da documentação](#recomenda%c3%a7%c3%b5es-para-cria%c3%a7%c3%a3o-da-documenta%c3%a7%c3%a3o)
-   [Como usar](#como-usar)
    -   [HTML](#html)
        -   [Propriedades obrigatórias](#propriedades-obrigat%c3%b3rias)
        -   [Propriedades Adicionais](#propriedades-adicionais)
    -   [Javascript](#javascript)
        -   [Configurações obrigatórias](#configura%c3%a7%c3%b5es-obrigat%c3%b3rias)
        -   [Configurações Adicionais](#configura%c3%a7%c3%b5es-adicionais)
    -   [Estados](#estados)
-   [Próximos passos](#pr%c3%b3ximos-passos)
-   [Dependências](#depend%c3%aancias)
-   [Links relacionados](#links-relacionados)
-   [Atalhos de teclado](#atalhos-de-teclado)

## Introdução

Essa seção não faz parte da documentação, ela é apenas para explicar melhor como esse template funciona.

A primeira coisa que a documentação de desenvolvedor tem que ter é a versão da documentação de design utilizada como base para a construção do componente. Isso porque pode acontecer da documentação de design ser atualizada e o componente implementado e sua documentação continuarem sem alterações.
Ex: doc. design: #X.0.0

Esse é um template para documentação de DESENVOLVEDOR. Cada componente é único e pode exigir pequenas variações desse documento. Cabe a quem escrever a documentação avaliar quais seções são necessárias para os componentes.

Sugestões são bem-vindas e devem ser discutidas com o time antes de serem adotadas.

O título é recuperado do arquivo config.json e a descrição é única para as documentações de DESIGNER e DESENVOLVEDOR. Caso seja necessário atualizar, atualize o arquivo correspondende.
Ex: no componente button o arquivo de descrição é button.md

### Recomendações para criação da documentação

1.  Ao colocar o código-fonte coloque a linguagem correta. Ex ``` javascript
2.  Tente pedir para alguém seguir a documentação e verificar se conseguem usar o componente/template
3.  Seja direto nos textos de explicação

Abaixo estão as seções que uma documentação de desenvolvimento pode conter e entre comentários está uma explicação resumida sobre a seção.

<!-- Versão da doc. de DESIGN usada como base para o desenvolvimento -->
<!-- doc. design: #1.0.0 -->

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<p>Exemplo de código HTML</p>
```

#### Propriedades obrigatórias

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->

| Atributo | Tipo    | Valor padrão | Descrição                                            |
| -------- | ------- | ------------ | ---------------------------------------------------- |
| title    | string  | undefined    | Et deserunt adipisicing culpa cupidatat consequat    |
| timeout  | number  | 10           | Amet enim labore Lorem qui labore sint ipsum ullamco |
| validade | boolean | false        | Exercitation minim eiusmod enim irure dolore ullamco |

#### Propriedades Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Atributo        | Tipo     | Valor padrão | Descrição                          |
| --------------- | -------- | ------------ | ---------------------------------- |
| max-date        | data     | now()        | Enim excepteur laborum cillum quis |
| min-date        | data     | now()        | Consectetur ea eu sunt aliquip     |
| after-selection | function | undefined    | Anim cillum nulla excepteur sit    |

### Javascript

```javascript
const exemplo = Exemplo de código javascript;
```

#### Configurações obrigatórias

| Propriedad | Tipo     | Valor padrão | Descrição                 |
| ---------- | -------- | ------------ | ------------------------- |
| prop1      | function | undefined    | Velit adipisicing ullamco |
| prop2      | boolean  | true         | Magna cupidatat veniam    |

#### Configurações Adicionais

| Propriedade | Tipo | Valor padrão | Descrição                 |
| ----------- | ---- | ------------ | ------------------------- |
| prop1       |      |              | Minim commodo adipisicing |
| prop2       |      |              | Ut anim Lorem incididunt  |

### Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado     | propriedade | Valores    |
| ---------- | ----------- | ---------- |
| Desativado | disabled    | true/false |
| Focado     | foucused    | true       |

## Próximos passos

<!-- Mostra as features que já foram planejadas para o componente e o status dela para os designers e desenvolvedores -->

-   Não planejado: A necessidade foi identificada, mas ainda não tem data para ser satisfeita.
-   Fazendo: A equipe está trabalhando na necessidade.
-   Feito: Necessidade já é satisfeita.

| Nome                                         | Documentação de Design | Desenvolvimento |
| -------------------------------------------- | ---------------------- | --------------- |
| Validação de datas                           | Feito                  | Feito           |
| Customização de mensagem de erro             | Feito                  | Não planejado   |
| Modo input único                             | Fazendo                | Feito           |
| Desabilitar apenas alguns dias no calendário | Não planejado          | Não planejado   |

## Dependências

<!-- Caso o componente dependa de algum outro ou de algo externo, listamos aqui colocando links para a documentação da dependência -->

| Internas                        | Externas |
| ------------------------------- | -------- |
| [Input](/ds/components/input)   |          |
| [Button](/ds/components/button) |          |
| [Select](/ds/components/select) |          |

## Links relacionados

<!-- Links para mais informações ou referências que sejam inportantes para o desenvolvedor usar o componente -->

## Atalhos de teclado

<!-- Caso o uso do componente por atalhos tenha sido implementado -->
