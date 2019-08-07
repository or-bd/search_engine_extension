import React, { useState } from 'react';
import Clock from '../Clock';
import SearchEngine from '../SearchEngine';
import './style.scss';

const Popup = () => {
  const [view, setView] = useState('SearchEngine');

  const updateView = (newView) => {
    setView(newView);
  };

  const GetView = () => {
    switch (view) {
      case 'SearchEngine':
        return <SearchEngine redirect={updateView} currView={view} />;
      case 'Clock':
        return <Clock redirect={updateView} currView={view} />;
      default:
        return <SearchEngine redirect={updateView} currView={view} />;
    }
  };

  return (
    <GetView />
  );
};

export default Popup;
