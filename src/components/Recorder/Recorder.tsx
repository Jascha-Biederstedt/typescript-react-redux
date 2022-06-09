import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDateStart, start } from '../../redux/recorder';

import styles from './Recorder.module.css';

const Recorder = () => {
  const dispatch = useDispatch();
  const dateStart = useSelector(selectDateStart);

  const started = dateStart !== '';

  const handleClick = () => {
    dispatch(start());
  };

  return (
    <div className={`${styles.recorder} ${started && styles.recorderStarted}`}>
      <button onClick={handleClick} className={styles.recorderRecord}>
        <span></span>
      </button>
      <div className={styles.recorderCounter}>00:00:00</div>
    </div>
  );
};

export default Recorder;
