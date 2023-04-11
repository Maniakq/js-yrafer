// App.js
import React from 'react';
import GoogleCustomSearch from './GoogleCustomSearch';

const App = () => {
  // Replace 'YOUR_CX_VALUE' with your own Google Custom Search Engine ID
  const cx = 'https://cse.google.com/cse.js?cx=11e54fe9a005f44c6';

  return (
    <div>
      <h1>Google Custom Search</h1>
      <GoogleCustomSearch cx={cx} />
    </div>
  );
};

export default App;
