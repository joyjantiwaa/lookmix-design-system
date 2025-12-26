import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './banner';

const meta: Meta<typeof Banner> = {
  title: 'Data Display/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['hero', 'promotional', 'alert'],
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
    overlay: { control: 'boolean' },
    inverse: { control: 'boolean' },
    backgroundImage: { control: 'text' },
    foregroundImage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

// 1. Hero Banner - หน้าแรกสุดอลังการ
export const Hero: Story = {
  args: {
    variant: 'hero',
    title: 'Summer Collection 2024',
    subtitle: 'ค้นพบสไตล์ใหม่ที่บ่งบอกความเป็นคุณ พร้อมส่วนลดสูงสุด 50% เฉพาะสมาชิก Lookmix เท่านั้น',
    ctaText: 'ช้อปเลยตอนนี้',
    backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    overlay: true,
    inverse: true, // ใช้สีขาวเพื่อให้เด่นบนรูปเข้ม
    align: 'center',
  },
};

// 2. Promotional - สำหรับส่วนกลางของหน้าเว็บ
export const Promotional: Story = {
  args: {
    variant: 'promotional',
    title: 'สมัครรับข่าวสาร',
    subtitle: 'ไม่พลาดทุกโปรโมชั่นเด็ดและสินค้าใหม่ล่าสุด ส่งตรงถึงอีเมลคุณทุกสัปดาห์',
    ctaText: 'ลงทะเบียน',
    align: 'left',
    inverse: false,
    style: { backgroundColor: 'var(--colors-primary-subtle)' } // ทดลองเปลี่ยนสีพื้นหลัง
  },
};

// 3. Alert Style - สำหรับประกาศหรือ Notification
export const AlertBanner: Story = {
  args: {
    variant: 'alert',
    title: 'ส่งฟรีทุกออเดอร์!',
    subtitle: 'เมื่อมียอดซื้อครบ 999 บาทขึ้นไป ภายในเดือนนี้เท่านั้น',
    ctaText: 'ดูรายละเอียด',
    inverse: false,
  },
};

// 4. Mobile App Mockup - เคสใช้ Foreground Image
export const MobileAppHero: Story = {
  args: {
    variant: 'hero',
    title: 'Lookmix App',
    subtitle: 'ช้อปสะดวกกว่าเดิมบนแอปพลิเคชัน ดาวน์โหลดได้แล้ววันนี้ทั้ง iOS และ Android',
    ctaText: 'ดาวน์โหลดแอป',
    backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029',
    foregroundImage: 'https://cdn-icons-png.flaticon.com/512/888/888857.png', // ตัวอย่างรูป mockup
    overlay: true,
    inverse: true,
    align: 'center',
  },
};

// 5. Left Aligned with Background
export const LeftAlignedHero: Story = {
  args: {
    variant: 'hero',
    title: 'ใหม่! คอลเลกชันฤดูหนาว',
    subtitle: 'เตรียมตัวรับลมหนาวด้วยเสื้อผ้าคุณภาพเยี่ยม ดีไซน์ทันสมัย',
    ctaText: 'ดูสินค้าทั้งหมด',
    backgroundImage: 'https://images.unsplash.com/photo-1520975954732-35dd2229969e?q=80&w=1974',
    align: 'left',
    inverse: true,
    overlay: true,
  },
};