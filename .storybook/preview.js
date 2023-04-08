/** @type { import('@storybook/react').Preview } */
import "../public/global_base.css"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Components', 'Atoms', ['Button Primary', 'Heading Small', 'Paragraph', 'Shape', 'Subtitle Small'], 'Molecules', ['Card Content']],
      },
    },
  },
};

export default preview;
