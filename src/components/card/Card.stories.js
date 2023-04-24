// Importa o mixin
import card from './card.pug'

/**
 * Usa o mixin PUG do componente para gerar o HTML final
 * @param {*} args propriedades que serão enviadas para o PUG
 * @returns {HTMLElement} HTML do componente com os parâmetros preenchidos
 */
const createCard = (props) => {
  const contents = props.content
  return card({ contents, props })
}

// https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Componentes/Card',
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    content: {
      name: 'Conteúdo',
      control: 'text',
      description: 'Conteúdo da área principal',
    },
    hasCollapse: {
      name: 'Tem collapse',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
}

const Template = (args) => {
  return createCard(args)
}

// https://storybook.js.org/docs/html/writing-stories/args
export const DEFAULT = Template.bind()
DEFAULT.storyName = 'Padrão'
DEFAULT.args = {
  content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, et rem. Unde sit dolor, maiores et impedit adipisci delectus assumenda perspiciatis a, maxime quae sequi. Quas omnis ad a ipsum.

      Nihil libero sequi tempora, excepturi aut accusamus consectetur suscipit repellendus? Eius eum totam numquam rerum, itaque minus est sequi cumque distinctio quod optio illum placeat, beatae ex ab reiciendis illo.

      Excepturi, sed! Quod, rem hic quae iste corporis vero esse sint cumque consequuntur exercitationem aliquid deleniti veniam mollitia architecto tenetur tempore illum voluptatum accusantium, doloribus est! Accusantium eligendi hic incidunt?
      `,
  hasCollapse: true,
}
