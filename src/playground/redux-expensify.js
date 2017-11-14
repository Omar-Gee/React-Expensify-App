import { createStore, combineReducers } from 'redux';

const demoState = {
	expenses: [{
		id: 'awdwac',
		description: 'Januari Rent',
		note: 'This was the final payment for that address',
		amount: 75000,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};
