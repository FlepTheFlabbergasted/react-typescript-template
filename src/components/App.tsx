import React from 'react';

import * as Constants from '../common/static/constants';

const log = require('loglevel-colored-level-prefix')({level: Constants.GLOBAL_LOG_LEVEL});

const App = () => {
  log.debug(`Look mom I'm debugging!`);

  return (
    <React.Fragment>
      <div className="left-container">
        <p>Hi, I'm App</p>
      </div>
      <div className="right-container">
        <p>This is my right side</p>
      </div>
    </React.Fragment>
  );
}

export default App;