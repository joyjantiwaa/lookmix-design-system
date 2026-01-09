// src/icon/icon.tsx
import React from 'react';
import { Icon as IconifyRender } from '@iconify/react'; 

export interface IconProps {
  /** ชื่อไอคอนจาก Iconify เช่น "mingcute:home-line" */
  icon?: string; 
  /** ขนาดความกว้างและสูง (px) */
  size?: number | string;
  /** คลาสสำหรับปรับแต่งเพิ่มเติม */
  className?: string;
  /** สีของไอคอน (ค่าเริ่มต้นคือ 'currentColor') */
  color?: string;
  /** สไตล์เพิ่มเติม */
  style?: React.CSSProperties;
  /** รองรับการนำ Component ไอคอนอื่นๆ มาใส่ข้างใน */
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
  
  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    flexShrink: 0,
    color: color || 'currentColor', // ใช้ currentColor เป็นค่าพื้นฐาน
    ...style,
  };

  // เคสที่ 1: ถ้ามีการส่ง children (Custom SVG หรือ Local Icons)
  if (children) {
    return (
      <span className={className} style={containerStyle} {...rest}>
        {React.isValidElement(children) 
          ? React.cloneElement(children as React.ReactElement<any>, { 
              width: size, 
              height: size,
              // ป้องกัน Error ถ้า children ไม่มี style props
              style: { display: 'block', ...(children.props?.style || {}) } 
            }) 
          : children}
      </span>
    );
  }

  // เคสที่ 2: ถ้าไม่มี icon string ส่งมา
  if (!icon) return null;

  // เคสที่ 3: ใช้ Iconify
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