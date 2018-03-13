import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import registerServiceWorker from './registerServiceWorker';

import "./scss/application.scss";

//custom components
import App from './js/components/containers/App';
import store from "./store";


render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('cart-app')
);


registerServiceWorker();