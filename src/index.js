import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {appReducer} from "./store/reducers/app";
import {qrReducer} from "./store/reducers/qr";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(combineReducers({
    app: appReducer,
    qr: qrReducer
}), compose(
    applyMiddleware(
        thunk
    )
))

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
