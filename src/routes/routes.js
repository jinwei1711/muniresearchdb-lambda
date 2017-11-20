/*
	Routes for Page Sidebar
 */

import Dashboard from 'components/global/Dashboard.vue'
import Credit_Data from 'credit/shared/credit_data_mgmt.vue'


//Credit Routes
import Credit_Rev from 'credit/credit_rev/credit_rev_home.vue'
import Credit_Go from 'credit/credit_go/credit_go_home.vue'

//Credit Child Routes - Tabs
import credit_go_routes  from 'routes/credit_go_routes'
import credit_rev_routes from 'routes/credit_rev_routes'


export default [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard		
	},
	{
		path: '/credit-data',
		name: 'credit-data',
		component: Credit_Data		
	},
	{
		path: '/credit-go',
		name: 'credit-go',
		component: Credit_Go,
		children: credit_go_routes

	},
	{
		path: '/credit-revenue',
		name: 'credit-revenue',
		component: Credit_Rev,
		children: credit_rev_routes
	},
	{
		path: '/credit-reports',
		name: 'credit-reports'
	},
	{
		path: '*',
		component: Dashboard
	}

]



