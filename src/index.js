import React from 'react';
import ReactDOM from 'react-dom';
import './shared/index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {theme} from "./shared/theme";
import {ThemeProvider} from "styled-components";

import App from './App';
import LoginComponent from './components/Auth/LoginComponent';
import Register from './components/Auth/Register/RegisterComponent';

const Root = () => (
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </Router>
    </ThemeProvider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
