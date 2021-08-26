import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

interface IReduxProvider {
  children: React.ReactElement;
  initialState?: any;
}

const ReduxProvider = ({ children, initialState }: IReduxProvider) => {
  const isDEV = import.meta.env.DEV;
  const isDevToolsOn = (middlewares, on) => (
    on ? composeWithDevTools(middlewares) : middlewares
  );

  // не забываем поставить
  // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  const store = createStore(
    reducers,
    initialState,
    isDevToolsOn(applyMiddleware(reduxPromise), isDEV),
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
