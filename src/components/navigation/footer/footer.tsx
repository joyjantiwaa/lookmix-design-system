import React from 'react';
import classNames from 'classnames';
import { Button } from '../../forms/button';
import { Link } from '../../navigation/link';
import { Icon } from '../../../icon/icon'; // ✅ ใช้ตัวนี้ตัวเดียวจบ
import styles from './footer.module.scss';

export type FooterProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function Footer({ className, style }: FooterProps) {
  return (
    <footer className={classNames(styles.footer, className)} style={style}>
      <div className={styles.container}>
        
        {/* ส่วนบน: ปุ่มดาวน์โหลดแอป */}
        <div className={styles.topSection}>
          <span className={styles.downloadLabel}>Download</span>
          <div className={styles.storeButtons}>
            <Button
              appearance="secondary"
              className={styles.storeButton}
              href="https://www.apple.com/app-store/"
              external
            >
              {/* ✅ เปลี่ยนเป็นชื่อไอคอนจาก Iconify */}
              <Icon icon="mingcute:apple-fill" size={20} />
              App store
            </Button>
            
            <Button
              appearance="secondary"
              className={styles.storeButton}
              href="https://play.google.com/store"
              external
            >
              <Icon icon="mingcute:google-play-fill" size={20} />
              Google play
            </Button>
          </div>
        </div>

        <div className={styles.divider} />

        {/* ส่วนล่าง: Copyright, Links และ Social Media */}
        <div className={styles.bottomSection}>
          <div className={styles.leftGroup}>
            <span className={styles.copyright}>&copy; LY Corporation</span>
            <div className={styles.links}>
              <Link href="/help" className={styles.link}>Help</Link>
              <Link href="/terms" className={styles.link}>User Agreement</Link>
              <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            </div>
          </div>

          <div className={styles.socials}>
            {/* ✅ ใช้ไอคอน Social จาก Iconify สวยงามและคุมง่าย */}
            <Link href="https://facebook.com" external noStyles>
              <Icon icon="mingcute:facebook-fill" size={24} className={styles.socialIcon} />
            </Link>
            
            <Link href="https://instagram.com" external noStyles>
              <Icon icon="mingcute:ins-line" size={24} className={styles.socialIcon} />
            </Link>
            
            <Link href="https://youtube.com" external noStyles>
              <Icon icon="mingcute:youtube-fill" size={24} className={styles.socialIcon} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}