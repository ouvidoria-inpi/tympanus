import { AllHtmlEntities } from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
import { renderToStaticMarkup } from 'react-dom/server'
const entities = new AllHtmlEntities()

export default (story) =>
  prettier.format(entities.decode(renderToStaticMarkup(story())), {
    parser: 'html',
    plugins: [HTMLParser],
  })
