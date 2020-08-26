import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './providers/AuthProvider';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import {GlobalStyle} from './themes';
import AppRouter from './router/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
