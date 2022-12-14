import React from "react";
import ReactDOM from "react-dom";
import { combineReducers,createStore  } from "redux";
import { Provider } from "react";
import Field from './field'
import { Provider } from "react-redux";


const reducers = combineReducers({
    field: () => ({value: 'opa'})
})
ReactDOM.render(
    <Provider>
        <Field initialValue='teste' />
    </Provider>
,document.getElementById('app'))