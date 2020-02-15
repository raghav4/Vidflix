import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';
import './index.css';
import App from './App';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// eslint-disable-next-line

ReactDOM.render( < BrowserRouter > < App / > < /BrowserRouter> , document.getElementById('root'));