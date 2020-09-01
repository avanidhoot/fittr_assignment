import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import studentReducer from './reducers/studentReducer';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


let initialState = [
  {id:1,schoolname:'Test A',grade:1,division:'Division A'},
  {id:2,schoolname:'Test B',grade:2,division:'Division B'},
  {id:3,schoolname:'Test C',grade:3,division:'Division C'}
];

if( localStorage.getItem("students") === null)
localStorage.setItem('students',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('students'));

const store = createStore(studentReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
