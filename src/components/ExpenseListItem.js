import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
	<div>
		<h3>{description}</h3>
		<p>Amount: {amount}</p>
		<p>CreatedAt: {createdAt}</p>
	</div>
);

export default ExpenseListItem;