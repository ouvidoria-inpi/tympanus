[version]: # '8.1.5'

## Como usar

```html
<div class="br-tag text">
    <i class="fas fa-car" aria-hidden="true"></i>
    <span>Label</span>
</div>
```

Exemplo de Tag  simples

```html
<div class="br-tag interaction-select selected">
  <input id="tag-select" type="radio" aria-label="selecionar tag" checked="checked" name="vehicle" value="car"/>
  <label for="tag01"><i class="fas fa-car" aria-hidden="true"></i><span>Label</span>
  
  </label>
</div>
```

Exemplo usando Tag com interação.

### Propriedades obrigatórias

| Elemento | Tipo   | Descrição                          |
| -------- | ------ | ---------------------------------- |
| `br-tag` | classe | container do componente            |
| `text`   | classe | tag do tipo texto(com e sem ícone) |

> O **Botão Circular fechar** precisa de texto alternativo para o ícone de fechamento. Inclua o atributo `aria-label="texto alternativo"` explicando de forma clara qual tag será fechada. Isso devido a questão de acessibilidade para usuários que fazem uso de leitores de tela.

### Configurações Adicionais

| Elemento             | Tipo   | Descrição                       |
| -------------------- | ------ | ------------------------------- |
| `count`              | classe | tag do tipo contagem            |
| `icon`               | classe | tag do tipo ícone               |
| `interaction`        | classe | tag do tipo interação(fechar)   |
| `interaction-select` | classe | tag do tipo interação(escolha)  |
| `status`             | classe | tag do tipo status              |
| `success`            | classe | cor de sucesso na tag status    |
| `danger`             | classe | cor de perigo na tag status     |
| `warning`            | classe | cor de atenção na tag status    |
| `info`               | classe | cor de informação na tag status |
| `small`              | classe | aplica a densidade alta         |
| `medium`             | classe | aplica a densidade média        |
| `large`              | classe | aplica a densidade baixa        |
| `inverted`           | classe | aplicar em fundos escuros       |

> **Atenção** As cores de suporte e de apoio são usadas para cor de brackground das Tag(excetuando a tag de Interação). Elas vão do número 01 ao 11 e são usadas através da classe `.support-01` a `.support-11`. Para maiores informações sobre as cores acesse a página **[cores](fundamentos-visuais/cores)** presente na aba `Fundamentos-visuais` no site do Design System.
> Se necessário trocar as cores dos textos nas tags, usam-se as classes do **[utilitário de texto](utilities-css/textos)** presente na aba `Guias` no site do Design System.

## Dependências

-   [Button](/ds/components/button)

## Instanciação do Componente

### HTML

Incluir o arquivo `core.min.js` no html.

```html
<script src="<node_modules>/@govbr-ds/core/dist/core.min.js"></script>
```

> O arquivo core.min.js expõe um objeto chamado `core` contendo as referências para todas as classes exportadas.

## Javascript

Usar o seguinte código JavaScript para instanciar a classe `BRTag`, passando os seguintes parâmetros:

-   Nome da classe (br-tag)
-   Objeto referenciando a raiz do componente DOM

## Javascript

```javascript
const tagList = []
for (const brTag of window.document.querySelectorAll('.br-tag')) {
  tagList.push(new core.BRTag('br-tag', brTag))
}
```
