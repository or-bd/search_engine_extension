import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/Popup';

require('./media/icon128.png');
require('./manifest.json');

if (chrome && chrome.extension) {
  window.port = chrome.runtime.connect({ name: 'ExtCommunication' });
} else {
  console.log('You\'re not running as chrome extension, some feature won\'t work as expected.');
}

ReactDOM.render(<Popup />, document.getElementById('root'));
