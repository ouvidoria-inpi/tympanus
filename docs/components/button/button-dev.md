[design]: # "16.0.0"

## Como usar

### HTML

<!-- Deve incluir o HTML básico para uso do componente em seu estado 'default' escolhido pelo desenvolvedor/design. -->

```html
<button class="br-button" type="button">
    Rótulo
</button>
```

#### Configurações obrigatórias

| Elemento        | Tipo     | Descrição                   |
| --------------- | -------- | --------------------------- |
| `br-button`     | classe   | Container do componente     |
| `type="button"` | atributo | Tipo obrigatório para botão |
| Rótulo          | string   | Conteúdo do componente      |

**Atenção**!
Ao usar o componente sem nenhuma configuração adicional será carregado **Botão Retangular Terciário**.

#### Configurações Adicionais

<!-- Deve mostrar os outros atributos possíveis que definem os possíveis comportamentos. -->

| Elemento    | Tipo   | Descrição                  |
| ----------- | ------ | -------------------------- |
| `circle`    | classe | Aplica o Tipo Circular.    |
| `primary`   | classe | Aplica a Ênfase Primária   |
| `secondary` | classe | Aplica a Ênfase Secundária |
| `large`     | classe | Aplica a Densidade Baixa   |
| `small`     | classe | Aplica a Densidade Alta    |

**Atenção**!
Por questões de acessibilidade este tipo precisa do atributo `aria-label`.

### Estados

<!-- Propriedades que são relacionadas ao estado do componente devem ficar nessa seção e não nas de cima -->

| Estado     | Tipo     | Descrição                         |
| ---------- | -------- | --------------------------------- |
| `disabled` | atributo | Desativa o componente             |
| `loading`  | classe   | Aplicação do estado de carregando |

### Acessibilidade

- Ícones decorativos precisam ter o atributo `aria-hidden="true"`
- **Botão do tipo Circular** precisa de texto alternativo para o ícone decorativo. Inclua o atributo `aria-label="texto alternativo"` no componente
