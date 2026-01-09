// src/icon/icon.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import * as BoldIcons from './bold';
import * as LinearIcons from './linear';

const meta: Meta<typeof Icon> = {
  title: 'Icon/Icons',
  component: Icon,
  parameters: {docs: {
    layout: 'padded',

    // ✅ วิธีที่ 1: ปิด JSX source rendering (ต้นเหตุ error)
      docs: {
        disable: true,   // 🔥 ตัวนี้แหละที่คุณยังไม่ได้ใส่
      },
    },
  },

  // ✅ สำคัญ: ห้าม Storybook สร้าง controls จาก children
  argTypes: {
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: 'range', min: 12, max: 100, step: 4 },
    },
    color: {
      control: 'color',
    },
    icon: {
      control: false, // story นี้ไม่ได้ใช้ icon string
    },
  },
};

export default meta;

// --------------------------------------------------
// Helper Component: Icon Gallery
// --------------------------------------------------

type IconGalleryProps = {
  icons: Record<string, React.ComponentType<any>>;
  size?: number;
  color?: string;
};

const IconGallery = ({ icons, size, color }: IconGalleryProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '24px',
      }}
    >
      {Object.entries(icons).map(([name, IconComponent]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '16px',
            border: '1px solid #eee',
            borderRadius: '8px',
          }}
        >
          <Icon size={size} color={color}>
            <IconComponent />
          </Icon>

          <span
            style={{
              fontSize: '11px',
              color: '#666',
              textAlign: 'center',
              wordBreak: 'break-all',
            }}
          >
            {name.replace('Icon', '')}
          </span>
        </div>
      ))}
    </div>
  );
};

// --------------------------------------------------
// Stories
// --------------------------------------------------

export const LinearSet: StoryObj<typeof Icon> = {
  name: 'Linear Style',
  render: (args) => (
    <div>
      <h3 style={{ marginBottom: '20px', fontFamily: 'sans-serif' }}>
        Linear Icons ({Object.keys(LinearIcons).length})
      </h3>

      <IconGallery
        icons={LinearIcons}
        size={args.size}
        color={args.color}
      />
    </div>
  ),
  args: {
    size: 32,
    color: '#111827',
  },
};

export const BoldSet: StoryObj<typeof Icon> = {
  name: 'Bold Style',
  render: (args) => (
    <div>
      <h3 style={{ marginBottom: '20px', fontFamily: 'sans-serif' }}>
        Bold Icons ({Object.keys(BoldIcons).length})
      </h3>

      <IconGallery
        icons={BoldIcons}
        size={args.size}
        color={args.color}
      />
    </div>
  ),
  args: {
    size: 32,
    color: '#111827',
  },
};
