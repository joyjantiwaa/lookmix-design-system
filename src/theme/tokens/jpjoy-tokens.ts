/**
 * Jpjoy Design Tokens - Light Mode (Default)
 */
export function jpjoyTokens() {
  return {
    colors: {
      primary: {
        default: '#3B82F6',
        hover: '#2563EB',
        active: '#1D4ED8',
        subtle: '#EBF5FF',
      },
      secondary: {
        default: '#F3F4F6',
        hover: '#E5E7EB',
        active: '#D1D5DB',
      },
      surface: {
        background: '#FFFFFF',
        primary: '#FFFFFF',
        secondary: '#FAFAFA',
        tertiary: '#F3F4F6',
      },
      text: {
        primary: '#111827',
        default: '#111827',
        secondary: '#6B7280',
        tertiary: '#9CA3AF',
        inverse: '#FFFFFF',
      },
      status: {
        positive: { default: '#10B981', subtle: '#D1FAE5' },
        negative: { default: '#EF4444', subtle: '#FEE2E2' },
        warning: { default: '#F59E0B', subtle: '#FEF3C7' },
        info: { default: '#3B82F6', subtle: '#DBEAFE' },
      },
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    borders: {
      default: { color: '#E5E7EB', width: '1px', style: 'solid' },
      focus: { color: '#3B82F6', width: '2px', style: 'solid', offset: '2px' },
      radius: {
        small: '8px',
        medium: '16px',
        large: '24px',
        pill: '9999px',
        circle: '50%',
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif, system-ui",
      sizes: {
        display: { large: '48px', medium: '40px', small: '32px' },
        heading: { h1: '28px', h2: '24px', h3: '20px', h4: '18px', h5: '16px', h6: '14px' },
        body: { large: '18px', medium: '16px', default: '16px', small: '14px' },
        caption: { default: '12px', medium: '13px' },
      },
      lineHeight: { base: '1.5', heading: '1.25', tight: '1.1' },
      fontWeight: { regular: '400', medium: '500', semiBold: '600', bold: '700' },
      letterSpacing: { tight: '-0.02em', normal: '0', wide: '0.02em' },
    },
    spacing: {
      none: '0px',
      xs: '4px',
      small: '8px',
      default: '16px',
      medium: '24px',
      large: '32px',
      xl: '48px',
      xxl: '64px',
    },
    layout: { maxPageWidth: '1200px', gutter: '20px' },
    effects: {
      shadows: {
        xs: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        small: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        medium: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        large: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      opacity: { disabled: '0.5', hover: '0.9', faint: '0.3' },
      gradients: {
        primary: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        subtle: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
      },
      blur: { default: 'blur(8px)', heavy: 'blur(16px)', backdrop: 'blur(12px)' },
    },
    interactions: {
      cursor: { pointer: 'pointer', disabled: 'not-allowed', default: 'default' },
      zIndex: { base: '1', dropdown: '50', sticky: '100', modal: '1000', tooltip: '1100' },
      transitions: {
        duration: { fast: '150ms', medium: '300ms', slow: '500ms' },
        easing: {
          default: 'cubic-bezier(0.4, 0, 0.2, 1)',
          in: 'cubic-bezier(0.4, 0, 1, 1)',
          out: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  };
}

export type JpjoyThemeSchema = ReturnType<typeof jpjoyTokens>;