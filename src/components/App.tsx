import React from 'react';

import * as Constants from '../common/static/constants';
import { AppState } from '../common/static/types';

const getLogger = require('loglevel-colored-level-prefix');

// Set different log levels for different loggging modules
// A custom prefix could also be set this way, e.g. getLogger('Logger module name', {prefix: 'MyPrefix'})
getLogger(Constants.LOGGING_MODULE_CLASSES).setLevel(Constants.GLOBAL_LOG_LEVEL);
getLogger(Constants.LOGGING_MODULE_COMMON).setLevel(Constants.GLOBAL_LOG_LEVEL);
getLogger(Constants.LOGGING_MODULE_COMPONENTS).setLevel(Constants.GLOBAL_LOG_LEVEL);

const log = getLogger(Constants.LOGGING_MODULE_COMPONENTS);

class App extends React.Component<{}, AppState> {
  // Default state
  readonly state: AppState = {
    id: 1,
    name: 'Master',
    loggedIn: false,
  };

  render() {
    log.debug(`Look mom I'm debugging!`);

    return (
      <React.Fragment>
        <div className="left-container">
          <p>Hi, I'm App</p>
        </div>
        <div className="right-container">
          <p>This is my right side</p>
        </div>
        {/* <PortalButton onClick={this.func} id={'portal-exit'} className='class'/> */}
      </React.Fragment>
    );
  }
}

export default App;