## Como usar

### Propriedades obrigatórias

| Atributo | Tipo   | Valor Padrão   | Descrição               |
| -------- | ------ | -------------- | ----------------------- |
| class    | string | **br-loading** | Container do componente |

### Propriedades adicionais

| Atributo      | Tipo   | Valor Padrão | Descrição                    |
| ------------- | ------ | ------------ | ---------------------------- |
| data-progress | number |              | Porcentagem de carregamento. |
| class         | string | **medium**   | Modifica a densidade.        |

## Informações adicionais

- O tamanho padrão do loading é o menor, mas pode ser modificado para médio;
- Utilizar o atributo "data-progress" configura o loading para o tamanho maior, permitindo que a informação seja exibida sem quebra de layout;
- O formato "indeterminado" não possui elementos internos, enquanto o formato "determinado" inclui elementos internos em sua composição.
