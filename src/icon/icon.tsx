// src/icons/icon.tsx
import React from 'react';
import { Icon as IconifyRender } from '@iconify/react'; 

export interface IconProps {
  /** * ชื่อไอคอนจาก Iconify เช่น "mingcute:home-line"
   * ถ้าส่ง children มา ไม่ต้องใส่ icon ก็ได้ครับ
   */
  icon?: string; 
  
  /** ขนาดความกว้างและสูง (px) */
  size?: number | string;
  
  /** คลาสสำหรับปรับแต่งเพิ่มเติม */
  className?: string;
  
  /** สีของไอคอน (ค่าเริ่มต้นคือ 'currentColor' เพื่อให้เปลี่ยนตามสีตัวหนังสือ) */
  color?: string;
  
  /** สไตล์เพิ่มเติม */
  style?: React.CSSProperties;
  
  /** * รองรับการนำ Component ไอคอนอื่นๆ มาใส่ข้างใน 
   * เช่น <Icon size={20}><AppleIcon /></Icon>
   */
  children?: React.ReactNode;
}

export function Icon({ 
  icon,
  size = 24, 
  className,
  color,
  style,
  children,
  ...rest 
}: IconProps) {
  
  // สไตล์พื้นฐานสำหรับการคุมขนาดและสี
  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    flexShrink: 0, // ป้องกันไอคอนโดนเบียดจนแบน
    color: color || undefined,
    ...style,
  };

  // เคสที่ 1: ถ้ามีการส่ง children (เช่น <AppleIcon />) มาข้างใน
  if (children) {
    return (
      <span 
        className={className} 
        style={containerStyle}
        {...rest}
      >
        {/* บังคับให้รูปข้างในมีขนาดเต็มตามที่ตั้งไว้ที่ wrapper */}
        {React.isValidElement(children) 
          ? React.cloneElement(children as React.ReactElement<any>, { 
              width: size, 
              height: size,
              style: { display: 'block', ...((children.props as any).style || {}) } 
            }) 
          : children}
      </span>
    );
  }

  // เคสที่ 2: ถ้าไม่มี icon string ส่งมา ให้ไม่แสดงผลอะไรเลย
  if (!icon) return null;

  // เคสที่ 3: ใช้ Iconify Render ตามปกติ
  return (
    <span className={className} style={containerStyle} {...rest}>
      <IconifyRender 
        icon={icon} 
        width="100%" 
        height="100%"
        style={{ display: 'block' }}
      />
    </span>
  );
}