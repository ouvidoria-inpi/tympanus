[design]: # '16.0.0'

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<button
    class="br-button [circle] [primary|secondary] [large|small]"
    type="button"
    [circle]
    [primary|secondary]
    [large|small]
>
    Rótulo
</button>
```

#### Configurações obrigatórias

| Elemento      | Tipo     | Descrição                   |
| ------------- | -------- | --------------------------- |
| br-button     | classe   | Container do componente     |
| type="button" | atributo | Tipo obrigatório para botão |
| Rótulo        | string   | Conteúdo do componente      |

**Atenção**!
Ao usar o componente sem nenhuma configuração adicional será carregado **Botão Retangular Terciário**.

#### Configurações Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Elemento  | Tipo               | Descrição                  |
| --------- | ------------------ | -------------------------- |
| circle    | classe ou atributo | Aplica o Tipo Circular     |
| primary   | classe ou atributo | Aplica a Ênfase Primária   |
| secondary | classe ou atributo | Aplica a Ênfase Secundária |
| large     | classe ou atributo | Aplica a Densidade Baixa   |
| small     | classe ou atributo | Aplica a Densidade Alta    |

### Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado   | Tipo     | Descrição                         |
| -------- | -------- | --------------------------------- |
| disabled | disabled | Desativa o componente             |
| loading  | loading  | Aplicação do estado de carregando |
