const credit_go_getters = {

	//socio economics
	getSocioEconDateOf: state => {
		return state.socioeconomics.dateOf;
	},
	getSocioEconValues_assessed_value: state => {
		return state.socioeconomics.values.assessed_value;
	},
	getSocioEconValues_full_value: state => {
		return state.socioeconomics.values.full_value;
	},
	getSocioEconValues_top_ten_taxpayers: state => {
		return state.socioeconomics.values.assessed_value
	},
	getSocioEconValues_total_go_debt: state => {
		return state.socioeconomics.values.assessed_value
	},
	getSocioEconValues_total_revenue_debt: state => {
		return state.socioeconomics.values.assessed_value
	},
	getSocioEconValues_total_debt_limit: state => {
		return state.socioeconomics.values.assessed_value
	},
	getSocioEconValues_total_direct_debt: state => {
		return state.socioeconomics.values.assessed_value
	},
	getSocioEconValues_total_overlapping_debt: state => {
		return state.socioeconomics.values.assessed_value
	}
	
}