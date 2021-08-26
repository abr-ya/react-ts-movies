import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import { StateType } from 'typesafe-actions';
import reducers from './reducers';
import rootSaga from './sagas/rootSaga';

interface IReduxProvider {
  children: React.ReactElement;
  // eslint-disable-next-line react/require-default-props
  initialState?: any;
}

const ReduxProvider = ({ children, initialState }: IReduxProvider) => {
  const isDEV = import.meta.env.DEV;
  const isDevToolsOn = (middlewares: any, on: boolean) => (
    on ? composeWithDevTools(middlewares) : middlewares
  );

  const sagaMiddleware = createSagaMiddleware();
  // const rootReducer = createRootReducer();
  // type RootState = StateType<typeof reducers>;

  // не забываем поставить
  // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  const store = createStore(
    reducers,
    initialState,
    isDevToolsOn(applyMiddleware(sagaMiddleware), isDEV),
  );

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
