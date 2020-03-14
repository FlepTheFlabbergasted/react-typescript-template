import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

/**
 * Render the <App/> component to HTML div with id 'app-root'. The <App/> should contain everything we want to display
 * in the browser window.
 */
ReactDOM.render(<App />, document.getElementById('app-root'));