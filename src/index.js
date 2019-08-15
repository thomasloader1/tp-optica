import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './UI/layout/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './api/store'

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
    document.getElementById('root')
);