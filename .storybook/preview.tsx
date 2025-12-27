//update
import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { jpjoyTokens } from '../src/theme/tokens/jpjoy-tokens';
import { MemoryRouter } from 'react-router-dom';

const tokens = jpjoyTokens();

const flatten = (obj: any, prefix = '-') => {
  let vars: any = {};
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(vars, flatten(obj[k], `${prefix}-${k}`));
    } else {
      vars[`${prefix}-${k}`] = obj[k];
    }
  }
  return vars;
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const needsRouter = context.parameters?.router ?? false;

      const content = React.createElement(
        'div',
        {
          style: {
            ...flatten(tokens),
            padding: '2rem',
            minHeight: '100vh',
            fontFamily: tokens.typography.fontFamily,
            backgroundColor: tokens.colors.surface.background,
            color: tokens.colors.text.primary,
          },
        },
        React.createElement(Story, null)
      );

      return needsRouter ? React.createElement(MemoryRouter, null, content) : content;
    },
  ],
};

export default preview;
