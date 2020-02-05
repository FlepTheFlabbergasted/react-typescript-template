import React from 'react';

import GenericClass from './GenericClass'

const App = () => {
  let c: GenericClass = new GenericClass();
  return (
    <React.Fragment>
      <div className="left-container">
        <p>Hi, I'm App</p>
      </div>
      <div className="right-container">
        <p>{c.sayHi()}</p>
      </div>
    </React.Fragment>
  );
}

export default App;