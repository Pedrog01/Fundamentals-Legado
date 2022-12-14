import React from "react";
import ReactDOM from "react-dom";
import { combineReducers,createStore  } from "redux";
import { Provider } from "react-redux";
import Field from './field'
import fieldReducer from "./fieldReducer";
import Counter from "./counter";



const reducers = combineReducers({
    field: fieldReducer
})
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
,document.getElementById('app'))