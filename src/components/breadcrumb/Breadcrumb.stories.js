import breadcrumb from "./breadcrumb.pug";

export default {
  title: "Componentes/Breadcrumb",
  decorators: [
    (story) => {
      return `
      ${story()}
      <script type="module"/>
        import BRBreadcrumb from "/components/breadcrumb/breadcrumb.js";

        const breadcrumbList = [];
        for (const brBreadcrumb of window.document.querySelectorAll(
          ".br-breadcrumb"
        )) {
          breadcrumbList.push(new BRBreadcrumb("br-breadcrumb", brBreadcrumb));
        }
      </script>
    `;
    },
  ],
  argTypes: {
    crumbs: {
      name: "Crumbs",
      control: "object",
      description: "Objeto que com a lista dos níveis do Breadcrumb",
      table: {
        type: {
          summary: "array[object]",
          detail: `[{label[STRING]: "Label para o crumb", href[STRING]: "Endereço usado no href do crumb" }]

            Ex: [{label: 'Crumb 1', href: '/pagina1'}, {label: 'Crumb 2', href: '/pagina2',}]
            `,
        },
      },
    },
  },
};

const Template = (props) => {
  return breadcrumb({ props });
};

export const DEFAULT = Template.bind();
DEFAULT.storyName = "Padrão";
DEFAULT.args = {
  crumbs: [
    {
      label: "Crumb 1",
      href: "#",
    },
    {
      label: "Crumb 2",
      href: "#",
    },
    {
      label: "Crumb 3",
      href: "#",
    },
  ],
};

export const TRUNCATED = Template.bind();
TRUNCATED.storyName = "Com truncamento";
TRUNCATED.args = {
  crumbs: [
    {
      label: "Crumb 1",
      href: "#",
    },
    {
      label: "Crumb 2",
      href: "#",
    },
    {
      label: "Crumb 3",
      href: "#",
    },
    {
      label: "Crumb 4",
      href: "#",
    },
    {
      label: "Crumb 5",
      href: "#",
    },
    {
      label: "Crumb 6",
      href: "#",
    },
    {
      label: "Crumb 7",
      href: "#",
    },
    {
      label: "Crumb 8",
      href: "#",
    },
  ],
};
