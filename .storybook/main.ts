import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-interactions',

    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false, // 🔥 ปิดตัวต้นเหตุ
      },
    },
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) => ({
    ...config,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  }),

  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
