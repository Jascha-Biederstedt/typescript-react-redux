import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteUserEvent, UserEvent } from '../../redux/user-events';

import styles from './Calendar.module.css';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // @ts-ignore
    dispatch(deleteUserEvent(event.id));
  };

  return (
    <div className={styles.calendarEvent}>
      <div className={styles.calendarEventInfo}>
        <div className={styles.calendarEventTime}>10:00 - 12:00</div>
        <div className={styles.calendarEventTitle}>{event.title}</div>
      </div>
      <button
        onClick={handleDeleteClick}
        className={styles.calendarEventDeleteButton}
      >
        &times;
      </button>
    </div>
  );
};

export default EventItem;
