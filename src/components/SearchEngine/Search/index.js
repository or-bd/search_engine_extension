import React, { useState, useEffect } from 'react';
import useDebounce from './Debounce';
import './style.scss';

const Search = ({ selectedOption, onChange, submit }) => {
  const [value, setValue] = useState('');
  const debounce = useDebounce(value, 500);

  useEffect(() => {
    onChange(value);
  }, [debounce]);

  useEffect(() => {
    setValue(selectedOption);
  }, [selectedOption]);

  return (
    <div id="search">
      <input type="text" placeholder="Search something.." value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={submit}>Search</button>
    </div>
  );
};

export default Search;
