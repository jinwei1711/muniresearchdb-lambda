import Socio_Econ from 'credit/credit_go/Socio_Econ'
import Debt_Profile from 'credit/credit_go/Debt_Profile'
	

import General_Fund from 'credit/credit_go/General_Fund.vue'
import Governmental_Activities from 'credit/credit_go/Governmental_Activites.vue'
import Net_Position from 'credit/credit_go/Net_Position.vue'
import Credit_Description from 'credit/shared/credit_description.vue'


export default [
	{
		path: '/socio-economics',
		name: 'socio-economics',
		component: Socio_Econ
	},
	{
		path: '/debt-profile',
		name: 'debt-profile',
		component: Debt_Profile
	},
		// {
	 //        name: 'create_profile',
	 //        path: '/debt-profile/create',
	 //        component: Debt_Profile_create
	 //    },
	 //    {
	 //        name: 'edit_profile',
	 //        path: '/debt-profile/edit/:id',
	 //        component: Debt_Profile_update
	 //    },
	{
		path: '/general-fund',
		name: 'general-fund',
		component: General_Fund
	},
	{
		path: '/government-activities',
		name: 'government-activities',
		component: Governmental_Activities
	},
	{
		path: '/net-position',
		name: 'net-position',
		component: Net_Position
	},
	{
		path: '/credit-description',
		name: 'credit-description',
		component: Credit_Description
	}
	
];