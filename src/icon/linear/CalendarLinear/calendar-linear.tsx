import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './calendar-linear.module.scss';

export type CalendarLinearIconProps = Omit<IconProps, 'icon'>;

export function CalendarLinearIcon({ className, ...rest }: CalendarLinearIconProps) {
  return (
    <Icon 
      icon="solar:calendar-minimalistic-linear" 
      className={classNames(styles.calendarLinearIcon, className)} 
      {...rest} 
    />
  );
}