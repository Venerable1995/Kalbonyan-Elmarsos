import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configerStore';
import {addExpenses} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import'react-dates/lib/css/_datepicker.css';



const store = configureStore()



store.dispatch(addExpenses({description:'water bill',amount:100,createdAt:3000}))
store.dispatch(addExpenses({description:'gas bill',amount:200,createdAt:2000}))
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
console.log(visibleExpenses)

const jsx=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
  
ReactDOM.render(jsx , document.getElementById('app'));