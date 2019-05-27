import React from 'react';
import ReactDOM from 'react-dom';
import './shared/index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import {theme} from "./shared/theme";
import {ThemeProvider} from "styled-components";
import firebase from './firebase';
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Loader from 'react-loader-spinner';
import styled from "styled-components";

import App from './App';
import LoginComponent from './components/Auth/Login/LoginComponent';
import Register from './components/Auth/Register/RegisterComponent';
import rootReducer from "./reducers";
import {setUser, clearUser} from "./actions";

const store = createStore(rootReducer, composeWithDevTools());

// CSS starts
const SpinnerWrapper = styled.div`
    text-align: center;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// CSS ends


class Root extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.setUser(user);
                this.props.history.push('/');
            }
        })
    }

    render() {
        return (
            this.props.isLoading ?
                <SpinnerWrapper>
                    <Loader
                        type="Grid"
                        color="rgba(250, 65, 0, 1)"
                        height="70"
                        width="70"
                    />
                </SpinnerWrapper>
                :
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </ThemeProvider>
        );
    }
}

const mapStateFromProps = state => ({
    isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(
    connect(
        mapStateFromProps,
        {setUser, clearUser}
    )(Root)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth/>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
