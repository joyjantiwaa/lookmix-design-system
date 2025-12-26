
import classNames from 'classnames';
import styles from './order-status-timeline.module.scss';

export type OrderEvent = {
  id: string;
  status: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
};

export type OrderStatusTimelineProps = {
  events: OrderEvent[];
};

export function OrderStatusTimeline({ events }: OrderStatusTimelineProps) {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div 
          key={event.id} 
          className={classNames(styles.eventItem, {
            [styles.completed]: event.isCompleted,
            [styles.active]: event.isCompleted && (index === 0 || !events[index - 1]?.isCompleted)
          })}
        >
          <div className={styles.indicator}>
            <div className={styles.dot}>
              {event.isCompleted && <span className="mingcute--check-line" />}
            </div>
            {index !== events.length - 1 && <div className={styles.line} />}
          </div>
          
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.statusTitle}>{event.status}</span>
              <span className={styles.time}>{event.timestamp}</span>
            </div>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}