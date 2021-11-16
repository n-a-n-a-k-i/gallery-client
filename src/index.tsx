import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {grey} from "@mui/material/colors";

let theme = createTheme({
    palette: {
        mode: 'dark'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowY: 'overlay'
                },
                'body::-webkit-scrollbar': {
                    width: 16
                },
                'body::-webkit-scrollbar-thumb': {
                    borderRadius: 8,
                    border: '4px solid transparent',
                    backgroundClip: 'content-box',
                    backgroundColor: grey[700]
                },
                'body::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: grey[600]
                },
                'body::-webkit-scrollbar-thumb:active': {
                    backgroundColor: grey[500]
                }
            }
        }
    }
})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)