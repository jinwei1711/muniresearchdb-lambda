import Income_Statement from 'credit/credit_rev/Income_Statement'
import Balance_Sheet from 'credit/credit_rev/Balance_Sheet'
import Cash_Flow_Statement from 'credit/credit_rev/Cash_Flow_Statement'
import Rating_Model from 'credit/credit_rev/Rating_Model'
import Credit_Description from 'credit/shared/credit_description.vue'

export default[
	{
		path: '/income-statement',
		name: 'income-statement',
		component: Income_Statement
	},
	{
		path: '/balance-sheet',
		name: 'balance-sheet',
		component: Balance_Sheet
	},
	{
		path: '/cash-flow-statement',
		name: 'cash-flow-statement',
		component: Cash_Flow_Statement
	},
	{
		path: '/rating-model',
		name: 'rating-model',
		component: Rating_Model
	},
	{
		path: '/credit-description',
		name: 'credit-description',
		component: Credit_Description
	}
	
]; 