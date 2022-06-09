import React from 'react';

import styles from './Calendar.module.css';

const Calendar: React.FC = () => {
  return (
    <div className={styles.calendar}>
      <div className={styles.calendarDay}>
        <div className={styles.calendarDayLabel}>
          <span>1 February</span>
        </div>
        <div className={styles.calendarEvents}>
          <div className={styles.calendarEvent}>
            <div className={styles.calendarEventInfo}>
              <div className={styles.calendarEventTime}>10:00 - 12:00</div>
              <div className={styles.calendarEventTitle}>
                Learning TypeScript
              </div>
            </div>
            <button className={styles.calendarEventDeleteButton}>
              &times;
            </button>
          </div>
        </div>
      </div>
      <div className={styles.calendarDay}>
        <div className={styles.calendarDayLabel}>
          <span>1 February</span>
        </div>
        <div className={styles.calendarEvents}>
          <div className={styles.calendarEvent}>
            <div className={styles.calendarEventInfo}>
              <div className={styles.calendarEventTime}>10:00 - 12:00</div>
              <div className={styles.calendarEventTitle}>
                Learning TypeScript
              </div>
            </div>
            <button className={styles.calendarEventDeleteButton}>
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
