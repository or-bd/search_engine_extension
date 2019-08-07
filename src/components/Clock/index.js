import React, { useEffect, useState } from 'react';
import View from '../common/View';
import './style.scss';

const Clock = ({ redirect, currView }) => {
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <View redirect={redirect} currView={currView}>
      <span id="time">{time.toLocaleTimeString()}</span>
    </View>
  );
};

export default Clock;
