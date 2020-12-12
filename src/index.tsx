import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/page/Page';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './infrastructure/store/config';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Page />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
