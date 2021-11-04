import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {CssBaseline} from "@mui/material";

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App/>
    </Provider>,
    document.getElementById('root')
)