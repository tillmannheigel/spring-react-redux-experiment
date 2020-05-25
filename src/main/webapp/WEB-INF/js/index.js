import $ from 'jquery';

class Index {

    constructor() {
        console.log("Start React");
        let state = JSON.parse($("#state")[0].innerText);
        console.log(state);
    }
}

new Index();