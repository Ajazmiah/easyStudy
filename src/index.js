import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import ColContext from './collectionContext/collectionContext'
import './index.css';
import App from './App';


ReactDOM.render(
  <ColContext>
    <React.StrictMode>
      <BrowserRouter><App/></BrowserRouter>
    </React.StrictMode>
  </ColContext>,
  document.getElementById('root')
);
