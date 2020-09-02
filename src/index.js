import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {GlobalStyle} from './themes';
import AppRouter from './router/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
