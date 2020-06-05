import $ from 'jquery';
import React from 'react';
import ReactDOM from "react-dom";
import BookTable from './components/book-table'
import {SortComponent} from './components/sort-component'
import {createStore} from "redux";
import {Provider} from "react-redux";

console.log("Parse Server State")
let state = JSON.parse($("#state")[0].innerText);

console.log("Start Redux");
let store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'INITIALIZE'});

function reducer(oldState, action) {
    switch (action.type) {
        case 'INITIALIZE':
            return state;
        default:
            return state;
    }
}

console.log("Start React");

function App() {
    return (
        <Provider store={store}>
            <SortComponent/>
            <BookTable/>
        </Provider>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'));
