import React from 'react';
import Keyword from './Keyword';
import './style.scss';

const KeywordOptions = ({ list, onSelected }) => {
  const GetEmptyListMessage = () => (
    <div className="keyword-option not-found">
      <span>Options not found :/</span>
    </div>
  );

  const GetList = () => {
    if (Array.isArray(list)) {
      if (!list.length) {
        return <GetEmptyListMessage key="not-found" />;
      }

      return list.map((keyword, i) => <Keyword key={i} text={keyword} select={onSelected} />);
    }
    return '';
  };

  return (
    <div id="keywords-list">
      <GetList />
    </div>
  );
};

export default KeywordOptions;
