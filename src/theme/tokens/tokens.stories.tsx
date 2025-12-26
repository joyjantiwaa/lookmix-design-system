// tokens.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { jpjoyTokens } from './jpjoy-tokens';

const tokens = jpjoyTokens();

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// --- Helper Components ---
const TokenSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2
      style={{
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
        marginBottom: '20px',
        fontFamily: 'sans-serif',
      }}
    >
      {title}
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {children}
    </div>
  </div>
);

const ColorCard = ({ name, value }: { name: string; value: string }) => (
  <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
    <div style={{ backgroundColor: value, height: '80px', width: '100%' }} />
    <div style={{ padding: '10px' }}>
      <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>{name}</div>
      <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>{value}</div>
    </div>
  </div>
);

const TextCard = ({ name, value, style }: { name: string; value: string; style?: React.CSSProperties }) => (
  <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '10px', ...style }}>
    <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>{name}</div>
    <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>{value}</div>
  </div>
);

// --- Helper function to cast unknown values safely ---
function entriesOf(obj: Record<string, unknown>): [string, string][] {
  return Object.entries(obj).map(([k, v]) => [k, String(v)]);
}

// --- Stories ---
export const ColorPalette: StoryObj = {
  render: () => (
    <div>
      <TokenSection title="Primary Colors">
        {entriesOf(tokens.colors.primary).map(([key, value]) => (
          <ColorCard key={key} name={key} value={value} />
        ))}
      </TokenSection>

      <TokenSection title="Secondary Colors">
        {entriesOf(tokens.colors.secondary).map(([key, value]) => (
          <ColorCard key={key} name={key} value={value} />
        ))}
      </TokenSection>

      <TokenSection title="Surface Colors">
        {entriesOf(tokens.colors.surface).map(([key, value]) => (
          <ColorCard key={key} name={key} value={value} />
        ))}
      </TokenSection>

      <TokenSection title="Text Colors">
        {entriesOf(tokens.colors.text).map(([key, value]) => (
          <ColorCard key={key} name={key} value={value} />
        ))}
      </TokenSection>

      <TokenSection title="Status Colors">
        {Object.entries(tokens.colors.status).map(([status, sub]) =>
          entriesOf(sub as Record<string, unknown>).map(([key, value]) => (
            <ColorCard key={`${status}-${key}`} name={`${status}.${key}`} value={value} />
          ))
        )}
      </TokenSection>

      <TokenSection title="Overlay">
        <ColorCard name="overlay" value={tokens.colors.overlay as string} />
      </TokenSection>
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div style={{ fontFamily: tokens.typography.fontFamily }}>
      <TokenSection title="Font Sizes - Display">
        {entriesOf(tokens.typography.sizes.display).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} style={{ fontSize: value }} />
        ))}
      </TokenSection>

      <TokenSection title="Font Sizes - Heading">
        {entriesOf(tokens.typography.sizes.heading).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} style={{ fontSize: value }} />
        ))}
      </TokenSection>

      <TokenSection title="Font Sizes - Body">
        {entriesOf(tokens.typography.sizes.body).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} style={{ fontSize: value }} />
        ))}
      </TokenSection>

      <TokenSection title="Font Sizes - Caption">
        {entriesOf(tokens.typography.sizes.caption).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} style={{ fontSize: value }} />
        ))}
      </TokenSection>

      <TokenSection title="Line Height">
        {entriesOf(tokens.typography.lineHeight).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} />
        ))}
      </TokenSection>

      <TokenSection title="Font Weight">
        {entriesOf(tokens.typography.fontWeight).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} />
        ))}
      </TokenSection>

      <TokenSection title="Letter Spacing">
        {entriesOf(tokens.typography.letterSpacing).map(([key, value]) => (
          <TextCard key={key} name={key} value={value} />
        ))}
      </TokenSection>
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <TokenSection title="Spacing Scale">
      {entriesOf(tokens.spacing).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: value, height: '20px', backgroundColor: tokens.colors.primary.default }} />
          <span style={{ fontSize: '12px' }}>{key} ({value})</span>
        </div>
      ))}
    </TokenSection>
  ),
};


