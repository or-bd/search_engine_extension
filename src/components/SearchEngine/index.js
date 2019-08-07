import React, { useState, useEffect } from 'react';
import View from '../common/View';
import Search from './Search';
import Options from './KeywordOptions';
import Loader from './Loader';
import { getSearchEngineResults } from '../../utils/http';

const SearchEngine = ({ redirect, currView }) => {
  const [options, setOptions] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [keyword, setKeyword] = useState({ text: '', type: 'search' });

  useEffect(() => {
    if (keyword.text && keyword.type === 'search') {
      setIsProcessing(true);
      getSearchEngineResults(keyword.text).then((results) => {
        setIsProcessing(false);
        setOptions(results);
      });
    } else {
      setOptions(null);
    }
  }, [keyword.text]);

  const onKeywordSelected = (userKeywordOption) => {
    setKeyword({ text: userKeywordOption, type: 'option' });
    setOptions(null);
  };

  const onUserSubmitKeyword = () => {
    if (keyword.text) {
      window.port.postMessage({ keyword });
      setKeyword({ text: '', type: 'search' });
    }
  };

  return (
    <View redirect={redirect} currView={currView}>
      <Search
        selectedOption={keyword.text}
        onChange={value => setKeyword({ text: value, type: 'search' })}
        submit={onUserSubmitKeyword}
      />
      {isProcessing ? <Loader /> : <Options list={options} onSelected={onKeywordSelected} />}
    </View>
  );
};

export default SearchEngine;
