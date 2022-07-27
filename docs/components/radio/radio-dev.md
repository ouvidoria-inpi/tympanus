[version]: # (6.1.3)

## Como usar

### Propriedades obrigatórias

| Atributo | Tipo   | Valor Padrão | Descrição               |
| -------- | ------ | ------------ | ----------------------- |
| class    | string | **br-radio** | Container do componente |

## Estados

| Estado     | atributo | Valores      |
| ---------- | -------- | ------------ |
| Desativado | class    | **disabled** |
| Inválido   | class    | **invalid**  |
| Válido     | class    | **valid**    |

## Informações adicionais

### Listagem horizontal

Usar Utilitários CSS [Display](/ds/utilities-css/display) e [Espaçamento](/ds/utilities-css/espacamento) para modificar o componente.

### Radio desativado

Além de adicionar a classe "disabled" ao componente, adicione também o atributo "disabled" na tag html `<input>`.
