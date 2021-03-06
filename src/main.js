
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, HashRouter,Switch} from "react-router-dom"

import { AppContainer } from 'react-hot-loader';

import Home from './home/App';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app')
    )
};
render(Home);

if (module.hot) {
    module.hot.accept('./login/App', () => {
        render(Login)
    });
}