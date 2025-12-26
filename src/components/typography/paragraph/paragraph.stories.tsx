import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from './paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['body-large', 'body-medium', 'body-default', 'body-small', 'caption'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverse'],
    },
    element: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

// 1. แสดงขนาดต่างๆ ของ Body Text
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Paragraph size="body-large">
        <b>Body Large:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="body-medium">
        <b>Body Medium:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="body-default">
        <b>Body Default:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="body-small">
        <b>Body Small:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph size="caption">
        <b>Caption:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </div>
  ),
};

// 2. แสดงสีต่างๆ
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Paragraph color="primary">Primary Text Color</Paragraph>
      <Paragraph color="secondary">Secondary Text Color</Paragraph>
      <Paragraph color="tertiary">Tertiary Text Color</Paragraph>
      <div style={{ padding: '10px', backgroundColor: '#333', borderRadius: '4px' }}>
        <Paragraph color="inverse">Inverse Text Color (on dark background)</Paragraph>
      </div>
    </div>
  ),
};

// 3. การใช้งานจริงร่วมกับ Bold/Italic
export const RichText: Story = {
  args: {
    children: (
      <>
        This is a paragraph that includes <strong>bold text</strong>, 
        <em> italic text</em>, and even a <u>underlined part</u> to show 
        how it handles nested elements.
      </>
    ),
  },
};