import { Mark } from '@tiptap/core';

const CustomExtension = Mark.create({
  name: 'customText',

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => element.style.color || null,
        renderHTML: (attributes) => {
          if (!attributes.color) {
            return {};
          }
          return { style: `color: ${attributes.color}` };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span',
        getAttrs: (node) => {
          if (typeof node === 'string') return false;
          const element = node;
          return { color: element.style.color };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setColor:
        (color) =>
        ({ chain }) => {
          return chain().setMark(this.name, { color }).run();
        },
    };
  },
});

export default CustomExtension;
