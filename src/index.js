import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react'
import store from './store';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const Index = ({ datos}) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
