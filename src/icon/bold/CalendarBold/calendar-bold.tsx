import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './calendar-bold.module.scss';

export type CalendarBoldIconProps = Omit<IconProps, 'icon'>;

export function CalendarBoldIcon({ className, ...rest }: CalendarBoldIconProps) {
  return (
    <Icon 
      icon="solar:calendar-minimalistic-bold" 
      className={classNames(styles.calendarBoldIcon, className)} 
      {...rest} 
    />
  );
}