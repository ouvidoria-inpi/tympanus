<!-- [version]: # (1.0.0) -->

### Propriedades obrigatórias

| Atributo            | Tipo   | Valor Padrão | Descrição                                                    |
| ------------------- | ------ | ------------ | ------------------------------------------------------------ |
| `br-step`           | classe |              | container do componente                                      |
| `vertical`          | classe |              | aplicada ao container do componente, define a sua orientação |
| `step-progress`     | classe |              | container dos botões numerados de passos                     |
| `step-progress-btn` | classe |              | classe para os botões numerados de passos                    |
| `step-info`         | classe |              | tag interna do botão de passo contendo sua descrição         |

### Propriedades Adicionais

| Atributo       | Tipo               | Valor Padrão | Descrição                                                                                                                                                                      |
| -------------- | ------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data-initial` | atributo (inteiro) | 1            | número do passo que será selecionado por padrão                                                                                                                                |
| `data-type`    | atributo(string)   | **omitido*   | aplicada ao container do componente, define suas variantes: Indicador vazio, Simples e Textual (*void, simple, text*)                                                          |
| `data-label`   | atributo (string)  | bottom       | define o posicionamento dos rótulos (*top, bottom, left, right*)                                                                                                               |
| `data-alert`   | atributo(string)   | info         | usado no container `step-progress-button` para indicar o tipo de alerta a ser visualizado  (*success, warning, info, danger*)                                                  |
| `step-alert`   | classe             | **omitido*   | container dos ícones de alertas, erros, info e concluído                                                                                                                       |
| `step-icon`    | classe             | **omitido*   | classe da tag <i> que representa a informação iconográfica do botão. Deve ser aninhada dentro do `step-progress-button`                                                        |
| `data-scroll`  | atributo           | **omitido*   | determina se haverá um rolagem horizontal caso a quantidade de botões em tela ultrapasse a área visivel. Quando omitido os botões tentarão se encaixar na área visível da tela |

## Estados

| Elemento   | Tipo     | Descrição                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------- |
| `active`   | atributo | visual do botão de passos para a etapa atual                                     |
| `disabled` | atributo | visual do botão de passos para a etapa desabilitada (desabilita a ação do botão) |

Esses estados podem ser aplicados unicamente no elemento `step-progress-btn`, e são modificados pelo script do componente mediante sua navegação.

## Regras especiais

- Quando houver a necessidade de se utilizar muitos passos, recomenda-se o uso do atributo `data-scroll`, caso contrário deve-se omitir o atributo pois os botões ajustar-se-ão automaticamente ao tamanho da tela.
- No layout horizontal com alinhamento a esquerda ou direita, quando em um dispositivo móvel (mobile), o texto de descrição do passo (step-info) será automaticamente ocultado para manter a integridade do layout.

## Próximos Passos

| Nome                      | Documentação de Design | Desenvolvimento |
| ------------------------- | ---------------------- | --------------- |
| Densidades                | Feito                  | Fazendo         |
| Fundo Escuro              | Feito                  | Fazendo         |
| Interação com Componentes | Fazendo                | Fazendo         |

LEGENDA:

- Não planejado: A necessidade foi identificada, mas ainda não tem data para ser satisfeita.
- Fazendo: A equipe está trabalhando na necessidade.
- Feito: Necessidade já é satisfeita.

## Dependências

- [Button](/components/button)

## Instanciação do Componente

### HTML

Incluir o arquivo `govbrds.min.js` no html.

```html
<script src="<node_modules>/@govbr/govbrds/dist/govbrds.min.js"></script>
```

> O arquivo govbrds.min.js expõe um objeto chamado `govbrds` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRStep`, passando os seguintes parâmetros:

- Nome da classe (br-step)
- Objeto referenciando a raiz do componente DOM

```javascript
const stepList = []
for (const brStep of window.document.querySelectorAll('.br-step')) {
  stepList.push(new govbrds.BRStep('br-step', brStep))
}
```
