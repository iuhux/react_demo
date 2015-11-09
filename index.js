import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
React.render(
  // 为了解决 React 0.13 的问题，
  // 一定要把 child 用函数包起来。
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);