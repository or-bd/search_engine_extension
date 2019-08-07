import React from 'react';
import Header from '../Header';
import './style.scss';

const View = ({ redirect, currView, children }) => (
  <div className="view">
    <Header redirect={redirect} currView={currView} />
    {children}
  </div>
);

export default View;
