# 1. Documentação de Desenvolvedor

## 1.1. Introdução

Essa seção não faz parte da documentação, ela é apenas para explicar melhor como esse template funciona.

A primeira coisa que a documentação de desenvolvedor tem que ter é a versão da documentação de design utilizada como base para a construção do componente. Isso porque pode acontecer da documentação de design ser atualizada e o componente implementado e sua documentação continuarem sem alterações.
Ex: doc. design: #X.0.0

Esse é um template para documentação de DESENVOLVEDOR. Cada componente é único e pode exigir pequenas variações desse documento. Cabe a quem escrever a documentação avaliar quais seções são necessárias para os componentes.

Sugestões são bem-vindas e devem ser discutidas com o time antes de serem adotadas.

O título é recuperado do arquivo config.json e a descrição é única para as documentações de DESIGNER e DESENVOLVEDOR. Caso seja necessário atualizar, atualize o arquivo correspondente.
Ex: no componente button o arquivo de descrição é button.md

### 1.1.1. Recomendações para criação da documentação

1.  Ao colocar o código-fonte coloque a linguagem correta. Ex ``` javascript
2.  Tente pedir para alguém seguir a documentação e verificar se conseguem usar o componente/template
3.  Seja direto nos textos de explicação

Abaixo estão as seções que uma documentação de desenvolvimento pode conter e entre comentários está uma explicação resumida sobre a seção.

<!-- Versão da doc. de DESIGN usada como base para o desenvolvimento -->
<!-- doc. design: #1.0.0 -->

## 1.2. Como usar

### 1.2.1. HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<p>Exemplo de código HTML</p>
```

#### 1.2.1.1. Propriedades obrigatórias

<!-- Deve mostrar os atributos HTML que são obrigatórios para o uso do componente. -->

| Atributo | Tipo    | Valor padrão | Descrição                                            |
| -------- | ------- | ------------ | ---------------------------------------------------- |
| title    | string  | undefined    | Et deserunt adipisicing culpa cupidatat consequat    |
| timeout  | number  | 10           | Amet enim labore Lorem qui labore sint ipsum ullamco |
| validade | boolean | false        | Exercitation minim eiusmod enim irure dolore ullamco |

#### 1.2.1.2. Propriedades Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Atributo        | Tipo     | Valor padrão | Descrição                          |
| --------------- | -------- | ------------ | ---------------------------------- |
| max-date        | data     | now()        | Enim excepteur laborum cillum quis |
| min-date        | data     | now()        | Consectetur ea eu sunt aliquip     |
| after-selection | function | undefined    | Anim cillum nulla excepteur sit    |

### 1.2.2. Javascript

```javascript
const exemplo = Exemplo de código javascript;
```

#### 1.2.2.1. Configurações obrigatórias

| Propriedade | Tipo     | Valor padrão | Descrição                 |
| ---------- | -------- | ------------ | ------------------------- |
| prop1      | function | undefined    | Velit adipisicing ullamco |
| prop2      | boolean  | true         | Magna cupidatat veniam    |

#### 1.2.2.2. Configurações Adicionais

| Propriedade | Tipo | Valor padrão | Descrição                 |
| ----------- | ---- | ------------ | ------------------------- |
| prop1       |      |              | Minim commodo adipisicing |
| prop2       |      |              | Ut anim Lorem incididunt  |

### 1.2.3. Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado     | propriedade | Valores    |
| ---------- | ----------- | ---------- |
| Desativado | disabled    | true/false |
| Focado     | foucused    | true       |

## 1.3. Próximos passos

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

## 1.4. Dependências

<!-- Caso o componente dependa de algum outro ou de algo externo, listamos aqui colocando links para a documentação da dependência -->

| Internas                        | Externas |
| ------------------------------- | -------- |
| [Input](/ds/components/input)   |          |
| [Button](/ds/components/button) |          |
| [Select](/ds/components/select) |          |

## 1.5. Links relacionados

<!-- Links para mais informações ou referências que sejam importantes para o desenvolvedor usar o componente -->

## 1.6. Atalhos de teclado

<!-- Caso o uso do componente por atalhos tenha sido implementado -->
