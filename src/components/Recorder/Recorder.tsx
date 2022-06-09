import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDateStart, start, stop } from '../../redux/recorder';

import styles from './Recorder.module.css';

const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

const Recorder = () => {
  const dispatch = useDispatch();
  const dateStart = useSelector(selectDateStart);
  const [, setCount] = useState<number>(0);

  const started = dateStart !== '';
  let interval = useRef<number>(0);

  const handleClick = () => {
    if (started) {
      window.clearInterval(interval.current);
      dispatch(stop());
    } else {
      dispatch(start());
      interval.current = window.setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  let seconds = started
    ? Math.floor((Date.now() - new Date(dateStart).getTime()) / 1000)
    : 0;

  const hours = seconds ? Math.floor(seconds / 60 / 60) : 0;
  seconds -= hours * 60 * 60;

  const minutes = seconds ? Math.floor(seconds / 60) : 0;
  seconds -= minutes * 60;

  return (
    <div className={`${styles.recorder} ${started && styles.recorderStarted}`}>
      <button onClick={handleClick} className={styles.recorderRecord}>
        <span></span>
      </button>
      <div className={styles.recorderCounter}>
        {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
      </div>
    </div>
  );
};

export default Recorder;
