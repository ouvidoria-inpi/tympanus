# Titulo

Descrição

(Titulo e descrição não ficam no mesmo arquivo do resto da documentação é são unicos para desenvolvedores e designers)

## Uso

(Mostrar exemplos de código das possibilidades que o usuário tem para usar)

### HTML

Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design.

```html
<p>Exemplo de código HTML</p>
```

#### Propriedades obrigatórias

Deve mostrar os atributos HTML que são obrigatórios para o uso do componente.

| Atributo | Tipo    | Valor padrão | Descrição                                            |
| -------- | ------- | ------------ | ---------------------------------------------------- |
| title    | string  | undefined    | Define o título do componente                        |
| timeout  | number  | 10           | Tempo para executar a ação X                         |
| validade | boolean | false        | Componente deve validar a data conforme configuração |

#### Propriedades Adicionais

Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos.

| Atributo        | Tipo     | Valor padrão | Descrição                                              |
| --------------- | -------- | ------------ | ------------------------------------------------------ |
| max-date        | data     | now()        | Define a data máxima permitida pelo componente         |
| min-date        | data     | now()        | Define a data mínima permitida pelo componente         |
| after-selection | function | undefined    | Define uma função a ser chamada após a seleção da data |

### Javascript

```javascript
const exemplo = Exemplo de código javascript;
```

#### Propriedades obrigatórias

| Atributo | Tipo | Valor padrão | Descrição |
| -------- | ---- | ------------ | --------- |
|          |      |              |           |

#### Propriedades Adicionais

| Atributo | Tipo | Valor padrão | Descrição |
| -------- | ---- | ------------ | --------- |
|          |      |              |           |

## Estados

(Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima)

| Estado     | propriedade | Valores    |
| ---------- | ----------- | ---------- |
| Desativado | disabled    | true/false |
| Focado     | foucused    | true       |

## Status

(Mostra as features que já foram planejadas para o componente e o status dela para os designers e desenvolvedores)

Não planejado: A necessidade foi identificada, mas ainda não tem data para ser satisfeita.
Fazendo: A equipe está trabalhando na necessidade.
Feito: Necessidade já é satisfeita.

| Nome                                         | Documentação de Design | Desenvolvimento |
| -------------------------------------------- | ---------------------- | --------------- |
| Validação de datas                           | Feito                  | Feito           |
| Customização de mensagem de erro             | Feito                  | Não planejado   |
| Modo input único                             | Fazendo                | Feito           |
| Desabilitar apenas alguns dias no calendário | Não planejado          | Não planejado   |

## Dependências

(Caso o componente dependa de algum outro ou de algo externo, listamos aqui colocando links para a documentação da dependência)
|Internas|Externas|
|--|--|
|[Input](www.input.com)||
|[Button](www.button.com)||
|[Select](www.select.com)||

## Links relacionados

(Links para mais informações ou referências que sejam inportantes para o desenvolvedor usar o componente)

## Atalhos de teclado

(Caso o uso do componente por atalhos tenha sido implementado)

## Recomendações para criação da documentação

(Não deve ser incluída na documentação. São algumas recomendações sobre como construir a documentação do componente)

1.  Ao colocar o código-fonte coloque a linguagem correta. Ex ``` javascript
2.  Tente pedir para alguém seguir a documentação e verificar se conseguem usar o componente/template
3.  Seja direto nos textos de explicação
