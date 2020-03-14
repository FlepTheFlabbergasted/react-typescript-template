import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import MessageHandler from '../classes/MessageHandler';
import { Stopwatch } from '../common/helpers/stopwatch';
import { componentLogger as log } from '../common/static/loggers';
import { MyMessage } from '../common/static/message_types';
import { OnMessageCallback } from '../common/static/types';
import { configReducer } from '../common/store/config/reducers';

/**
 * A Redux store holds the whole state tree of one's application. The only way to change the state inside it is to
 * dispatch an action on it. E.g. store.dispatch(action)
 * @see https://redux.js.org/api/store/
 *
 * Components that want to subscribe to state updates and be able to dispatch actions can do so by using Redux's
 * connect(...) function.
 * @see https://react-redux.js.org/introduction/basic-tutorial#connecting-the-components
 * @see https://react-redux.js.org/introduction/basic-tutorial#common-ways-of-calling-connect
 */
const store = createStore(
  configReducer,
  composeWithDevTools() // Enables usage of Redux-Devtools in browser (only in development)
);

/**
 * Main entry point to application, here we render MapConfig and MapHandler to the browser window inside a div.
 * We also wrap the components in <Provider... /> to make our Redux store available to all components.
 *
 * @see https://react-redux.js.org/using-react-redux/accessing-store
 */
class App extends React.Component<{}, {}> {
  msgHandler: MessageHandler;
  stopwatch: Stopwatch;

  constructor(props: any) {
    super(props);

    let onMsg: OnMessageCallback = {
      onMsgCallback: this.onMsgCallback
    };

    this.msgHandler = new MessageHandler(onMsg);
    this.stopwatch = new Stopwatch();
  }

  onMsgCallback = (MyMessage: any) => {
    // Do stuff with msg
    log.debug(`Handling msg with id ${MyMessage.id} and text "${MyMessage.text}"`)
  }

  render() {
    return (
      <Provider store={store}>
        <div className='app-container'>
          <p>Hello, I am App</p>
        </div>
      </Provider>
    );
  }
}

export default App;