import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux/ReduxProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  document.getElementById('root'),
);
