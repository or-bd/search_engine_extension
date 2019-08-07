import React from 'react';
import './style.scss';

const navOptions = [
  { id: 1, name: 'SearchEngine' },
  { id: 2, name: 'Clock' },
];

const Header = ({ redirect, currView }) => (
  <div id="app-header">
    <ul>
      {navOptions.map(({ id, name }) => (
        <li
          key={id}
          onClick={() => redirect(name)}
          className={currView === name ? 'selected' : ''}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);

export default Header;
