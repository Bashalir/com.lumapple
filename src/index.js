import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GlobalStyle} from './styles';

const App = () => (
  <div>
    <GlobalStyle />
    <div>Hello World</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
