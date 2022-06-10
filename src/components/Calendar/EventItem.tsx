import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
  deleteUserEvent,
  updateUserEvent,
  UserEvent,
} from '../../redux/user-events';

import styles from './Calendar.module.css';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(event.title);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDeleteClick = () => {
    // @ts-ignore
    dispatch(deleteUserEvent(event.id));
  };

  const handleTitleClick = () => {
    setEditable(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleBlur = () => {
    if (title !== event.title) {
      dispatch(
        // @ts-ignore
        updateUserEvent({
          ...event,
          title,
        })
      );
    }
    setEditable(false);
  };

  return (
    <div className={styles.calendarEvent}>
      <div className={styles.calendarEventInfo}>
        <div className={styles.calendarEventTime}>10:00 - 12:00</div>
        <div className={styles.calendarEventTitle}>
          {editable ? (
            <input
              type="text"
              ref={inputRef}
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <span onClick={handleTitleClick}>{event.title}</span>
          )}
        </div>
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
