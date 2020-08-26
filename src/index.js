import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GlobalStyle} from './themes';
import AppRouter from './router/index';

const App = () => (
  <>
    <GlobalStyle />
    <AppRouter />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
