import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './UI/layout/App';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './api/store'

ReactDOM.render(
<Provider store = {store}>
<Router>
<App/>

</Router>

</Provider>
            
      ,
    document.getElementById('root')
);