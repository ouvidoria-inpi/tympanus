[version]: # '2.2.3'

### Propriedades obrigatórias

| Atributo | Tipo   | Valor Padrão    | Descrição               |
| -------- | ------ | --------------- | ----------------------- |
| class    | string | **br-checkbox** | Container do componente |

### Propriedades Adicionais

| Atributo | Tipo   | Valor Padrão     | Descrição              |
| -------- | ------ | ---------------- | ---------------------- |
| class    | string | **hidden-label** | Esconde texto do label |

## Estados

| Estado     | atributo | Valores      |
| ---------- | -------- | ------------ |
| Desativado | class    | **disabled** |
| Inválido   | class    | **invalid**  |
| Válido     | class    | **valid**    |

## Informações adicionais

### Listagem horizontal

Usar Utilitários CSS [Display](/ds/utilities-css/display) e [Espaçamento](/ds/utilities-css/espacamento) para modificar o componente.

### Checkbox desativado

Além de adicionar a classe "disabled" ao componente, adicione também o atributo "disabled" na tag html `<input>`.

### Estado intermediário

Usar Utilitário JS [Checkgroup](/ds/util/checkgroup). Veja exemplo de instanciação do collapse na aba "Javascript" na sessão **Código compartilhado entre exemplos**.
