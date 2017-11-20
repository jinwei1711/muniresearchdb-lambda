const credit_go_mutations = {
	transformObject: (state, payload) => {
		//Get Keys from Object
		var keys = Object.keys(payload);
		var vals = Object.values(payload);

		//1. Create an Object
		var output = {};

		//2. Assign Values to the Object
		
		
	},

	//socio economics
	setSocioEconDateOf: (state, payload) => {
		state.socioeconomics.dateOf += payload.dateOf;
	},
	getSocioEconValues_assessed_value: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	},
	getSocioEconValues_full_value: (state, payload) => {
		state.socioeconomics.values.push(payload.values.full_value);
	},
	getSocioEconValues_top_ten_taxpayers: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	},
	getSocioEconValues_total_go_debt: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	},
	getSocioEconValues_total_revenue_debt: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	},
	getSocioEconValues_total_debt_limit: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	},
	getSocioEconValues_total_direct_debt: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	},
	getSocioEconValues_total_overlapping_debt: (state, payload) => {
		state.socioeconomics.values.push(payload.values.assessed_value);
	}
	
}

/*
	Steps to add object to array
	1. Create an Object
	2. Assign Values to the Object
	3. Push the Object to the Array
 */
