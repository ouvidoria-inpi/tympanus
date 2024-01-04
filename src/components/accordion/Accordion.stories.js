import accordion from "./accordion.pug";

export default {
  title: "Componentes/Accordion",
  decorators: [
    (story) => {
      return `
      ${story()}
      <script type="module"/>
        import BRAccordion from "/components/accordion/accordion.js";

        const accordionList = []
        for (const brAccordion of window.document.querySelectorAll(
          '.br-accordion'
        )) {
          accordionList.push(new BRAccordion('br-accordion', brAccordion))
        }
      </script>
    `;
    },
  ],
  argTypes: {
    items: {
      name: "Lista de items",
      control: "object",
      description: "Lista de conteúdos para mostrar no accordion",
      table: {
        type: {
          summary: "array[object]",
          detail: `[{title[STRING]: "Título para o crumb", content[STRING]: "Conteúdo para expandir/collapsar" }]

            Ex: [{title: 'Título 1', content: 'Conteúdo 1'}, {title: 'Título 2', content: 'Conteúdo 2'}]
            `,
        },
      },
    },
    isNegative: {
      name: "Negativo",
      control: "boolean",
      description: "Accordion com background escuro",
      table: { defaultValue: { summary: false } },
    },
    isSingle: {
      name: "Único",
      control: "boolean",
      description: "Somente 1 item fica aberto por vez",
      table: { defaultValue: { summary: false } },
    },
  },
};

const Template = (props) => {
  return accordion({ props });
};

export const Positive = Template.bind();
Positive.storyName = "Positivo";
Positive.args = {
  items: [
    {
      title: "Título 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Título 2",
      content:
        "Fugiat officiis explicabo incidunt vel voluptate iste reiciendis laudantium? Voluptas, praesentium enim. Quas quam, eveniet nam voluptatibus sed dolorem totam soluta molestiae?",
    },
    {
      title: "Título 3",
      content:
        "Unde minus possimus animi, fuga facere nam sint harum tempora totam consectetur perferendis aliquam iure omnis et laboriosam aspernatur quis illo alias impedit similique, cumque sequi natus aperiam!",
    },
  ],
  isNegative: false,
  isSingle: false,
};

export const Negative = Template.bind();
Negative.storyName = "Negativo";
Negative.args = {
  ...Positive.args,
  isNegative: true,
};

export const Single = Template.bind();
Single.storyName = "Escolha única";
Single.args = {
  ...Positive.args,
  isSingle: true,
};
