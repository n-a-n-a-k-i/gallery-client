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

const theme = createTheme({
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
                    backgroundColor: '#686868'
                },
                'body::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#7b7b7b'
                },
                'body::-webkit-scrollbar-thumb:active': {
                    backgroundColor: '#a1a1a1'
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