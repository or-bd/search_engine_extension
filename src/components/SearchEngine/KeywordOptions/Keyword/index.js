import React from 'react';
import './style.scss';

const Keyword = ({ text, select }) => (
  <div className="keyword-option" onClick={() => select(text)}>
    <span>{text}</span>
  </div>
);

export default Keyword;
