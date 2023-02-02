import * as React from "react";
import {createRoot} from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";

import ReduxApp from "./components/App-redux";
// import App from "./components/App";
import reducer from './redux/reducers';
import {logging} from "./redux/middlewares/logging";



const store = createStore(reducer,
    compose(applyMiddleware(logging),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// --Non react sample code--
// console.log('external', store.getState());
//
// const testButton = document.querySelector('.testButton');
// const items = document.querySelector('.testUl');
// const inputValue = document.querySelector('.testInput');
//
// store.subscribe(() => {
//     // console.log('subscribe', store.getState());
//
//     inputValue.value = '';
//     items.innerHTML = '';
//     store.getState().map(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         items.appendChild(li);
//     });
// });
//
//
// testButton.addEventListener('click', () => {
//
//     console.log('INPUT', inputValue.value);
//     store.dispatch({type: 'WRITE', payload: inputValue.value});
// });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>
);