import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GlobalStyle} from './styles';
import Button from './components/atoms/button/Button.js';

const App = () => (
  <div>
    <GlobalStyle />
    <div>Hello World</div>
    <Button />
    <button>Bonjour</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
