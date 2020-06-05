import $ from 'jquery';
import ReactDOM from "react-dom";
import {createElement} from 'react';
import {BookTable} from './components/book-table'

class Main {

    constructor() {
        console.log("Start React");
        let state = JSON.parse($("#state")[0].innerText);
        console.log(state);

        const bookTable = document.querySelector('#table');
        ReactDOM.render(createElement(BookTable), bookTable);
    }
}

new Main();
