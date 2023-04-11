// GoogleCustomSearch.js
import React, { useEffect } from 'react';

const GoogleCustomSearch = ({ cx }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://cse.google.com/cse.js?cx=${cx}`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [cx]);

  return <div className="gcse-search"></div>;
};

export default GoogleCustomSearch;
