import React from 'react';
import ReactDOM from 'react-dom';
import {ToastProvider} from 'react-toast-notifications';

import './index.css';
import {GlobalStyle} from './themes';
import AppRouter from './router/index';

function App() {
  return (
    <>
      <ToastProvider>
        <GlobalStyle />
        <AppRouter />
      </ToastProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
