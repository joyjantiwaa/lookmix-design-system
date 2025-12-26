
import classNames from 'classnames';
import { Link } from '../../navigation/link';
import type { LogoProps } from './logo-type';
import styles from './logo.module.scss';

export function Logo({
  name = 'LOOKMIX',
  slogan,
  href,
  size = 39,
  logo,
  minimal = false,
  className,
  style,
  ...rest
}: LogoProps) {
  const isClickable = Boolean(href);
  
  const content = (
    <>
      <div className={styles.iconContainer} style={{ width: size, height: size }}>
        {logo || (
          <svg 
            width={size} 
            height={size} 
            viewBox="0 0 39 39" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_logo)">
              <rect width="39" height="39" rx="19.5" fill="white"/>
              <path d="M24.8387 6.37045C17.3511 3.781 3.73228 3.79303 9.15709 24.5568C14.5819 45.3205 -2.5406 39.7335 -11.78 34.3446" stroke="url(#paint0_linear_logo)" strokeWidth="20"/>
              <path d="M38.2161 8.59953C31.061 6.98879 17.3461 9.02203 19.7278 30.0409C22.1095 51.0597 5.69744 47.728 -2.80629 43.4347" stroke="url(#paint1_linear_logo)" strokeWidth="20"/>
              <path d="M43.342 24.529C35.0899 20.7761 20.8095 18.685 29.7052 40.344C38.6009 62.003 19.7816 53.7562 9.25996 46.9255" stroke="url(#paint2_linear_logo)" strokeWidth="20"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_logo" x1="1.00179" y1="15.7296" x2="25.7788" y2="25.4165" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="0.5" stopColor="#FFC0FE"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
              <linearGradient id="paint1_linear_logo" x1="12.8257" y1="21.9731" x2="34.3701" y2="32.5026" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="0.5" stopColor="#B7DFFF"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
              <linearGradient id="paint2_linear_logo" x1="19.7895" y1="30.2329" x2="48.8071" y2="38.1024" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="0.5" stopColor="#FFC0C0"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
              <clipPath id="clip0_logo">
                <rect width="39" height="39" rx="19.5" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      {!minimal && (
        <div className={styles.content}>
          <span className={styles.name}>{name}</span>
          {slogan && <span className={styles.slogan}>{slogan}</span>}
        </div>
      )}
    </>
  );

  const containerClass = classNames(
    styles.logo,
    { [styles.clickable]: isClickable },
    className
  );

  if (href) {
    return (
      <Link href={href} className={containerClass} style={style} noStyles>
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClass} style={style} {...rest}>
      {content}
    </div>
  );
}