import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
//import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'Gas bill', amount: 4500}));
store.dispatch(addExpense({description: 'Water bill', amount: 3000}));

store.dispatch(addExpense({description: 'Rent bill', amount: 109500}));

const state =store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//console.log(visibleExpenses);

const jsx = (
	<Provider store={ store }>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
