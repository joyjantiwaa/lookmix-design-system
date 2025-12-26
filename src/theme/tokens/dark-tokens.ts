import { DeepPartial } from '../../types/deep-partial';
import { JpjoyThemeSchema } from './jpjoy-tokens';

export const darkThemeSchema: DeepPartial<JpjoyThemeSchema> = {
  colors: {
    primary: {
      default: '#60A5FA',
      hover: '#93C5FD',
      active: '#3B82F6',
      subtle: 'rgba(59, 130, 246, 0.1)',
    },
    secondary: {
      default: '#374151',
      hover: '#4B5563',
      active: '#1F2937',
    },
    surface: {
      background: '#0F172A',
      primary: '#1E293B',
      secondary: '#334155',
      tertiary: '#1E293B',
    },
    text: {
      primary: '#F9FAFB',
      default: '#F9FAFB',
      secondary: '#D1D5DB',
      tertiary: '#9CA3AF',
      inverse: '#111827',
    },
    status: {
      positive: { default: '#34D399', subtle: 'rgba(16, 185, 129, 0.1)' },
      negative: { default: '#F87171', subtle: 'rgba(239, 68, 68, 0.1)' },
    },
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  borders: {
    default: { color: '#374151' },
  },
  effects: {
    shadows: {
      medium: '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
      glass: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    },
    gradients: {
      subtle: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 1) 100%)',
    },
  },
};