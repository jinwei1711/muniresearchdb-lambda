<template>	
	<div class="credit-data-table">

		<table>
			<tr>
				<td>
					<button @click="click_create">Add</button>
					<button @click="click_edit">Edit</button>
					<button @click="click_delete">Delete</button>
				</td>
			</tr>
		</table>
		<div class="create" style="display:none">
	        <h1>Create credit</h1>

	        <form v-on:submit.prevent="addProfile">
	            <div class="form-group">
	                <label name="credit_id">select Date</label>
	                <input type="date" class="form-control" v-model="credit.dateOf" id="dateOf" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">Cash</label>
	                <input type="text" class="form-control" v-model="credit.cash" id="Cash" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">CA</label>
	                <input type="text" class="form-control" v-model="credit.current_assets" id="CA" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">CAS</label>
	                <input type="text" class="form-control" v-model="credit.capital_assets" id="CAS" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TS</label>
	                <input type="text" class="form-control" v-model="credit.total_assets" id="TS" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">CL</label>
	                <input type="text" class="form-control" v-model="credit.current_ltd" id="CL" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">CUL</label>
	                <input type="text" class="form-control" v-model="credit.current_liabilities" id="CUL" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">LTD</label>
	                <input type="text" class="form-control" v-model="credit.long_term_debt" id="LTD" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TL</label>
	                <input type="text" class="form-control" v-model="credit.total_liabilities" id="TL" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">RNS</label>
	                <input type="text" class="form-control" v-model="credit.restricted_net_assets" id="RNS" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">UNS</label>
	                <input type="text" class="form-control" v-model="credit.unrestricted_net_assets" id="UNS" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">NCA</label>
	                <input type="text" class="form-control" v-model="credit.net_capital_assets" id="NCA" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TNS</label>
	                <input type="text" class="form-control" v-model="credit.total_net_assets" id="TNS" >
	            </div>

	            <div class="form-group">
	                <button class="btn btn-primary" >Save</button>
	            </div>
	        </form>
	    </div>
		<table>
			<thead>
				<tr>
					<th>Metric</th>
					<th  v-for="dt in rev_credits">
						{{ dt.dateOf }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>AV</td>
					<template v-for="val, key in rev_credits">
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.cash }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FV</td>
					<template v-for="val, key in rev_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.current_assets }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.capital_assets }}
						</td>
					</template>
				</tr>
				<tr>
					<td>AV</td>
					<template v-for="val, key in rev_credits">
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_assets }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FV</td>
					<template v-for="val, key in rev_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.current_ltd }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.current_liabilities }}
						</td>
					</template>
				</tr>
				<tr>
					<td>AV</td>
					<template v-for="val, key in rev_credits">
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.long_term_debt }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FV</td>
					<template v-for="val, key in rev_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_liabilities }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.restricted_net_assets }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TGT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.unrestricted_net_assets }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TRD</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.net_capital_assets }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TDL</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_net_assets }}
						</td>           
					</template> 
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	
	export default{
        data(){
            return{
                rev_credits: [],
                selected_item : -1,
                credit: {},
            }
        },

        created: function()
        {
            this.fetchProductData();
        },


        methods: {
	        click_create: function() {
	        	const addBtn = this.$el.querySelector('.create');
	        	addBtn.style.display = 'block';
	        	this.credit= {};
	        	this.selected_item = -1;
	        },
	        click_edit: function() {
	        	
	        	if (this.selected_item != -1) {
	        		const tmp_obj = {};
		        	const tmp = this.rev_credits[this.selected_item];

		        	tmp_obj.dateOf = tmp.dateOf;
		        	tmp_obj.cash = tmp.values[0].cash;
		        	tmp_obj.current_assets = tmp.values[0].current_assets;
		        	tmp_obj.capital_assets = tmp.values[0].capital_assets;
		        	tmp_obj.total_assets = tmp.values[0].total_assets;
		        	tmp_obj.current_ltd = tmp.values[0].current_ltd;
		        	tmp_obj.current_liabilities = tmp.values[0].current_liabilities;
		        	tmp_obj.long_term_debt = tmp.values[0].long_term_debt;
		        	tmp_obj.total_liabilities = tmp.values[0].total_liabilities;
		        	tmp_obj.restricted_net_assets = tmp.values[0].restricted_net_assets;
		        	tmp_obj.unrestricted_net_assets = tmp.values[0].unrestricted_net_assets;
		        	tmp_obj.net_capital_assets = tmp.values[0].net_capital_assets;
		        	tmp_obj.total_net_assets = tmp.values[0].total_net_assets;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata_rev['revBalanceSheet'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.rev_credits = alldata_rev['revBalanceSheet'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "cash" : this.credit.cash, 
                        "current_assets" : this.credit.current_assets, 
                        "capital_assets" : this.credit.capital_assets, 
                        "total_assets" : this.credit.total_assets,
                        "current_ltd" : this.credit.current_ltd, 
                        "current_liabilities" : this.credit.current_liabilities,
                        "long_term_debt" : this.credit.long_term_debt, 
                        "total_liabilities" : this.credit.total_liabilities, 
                        "restricted_net_assets" : this.credit.restricted_net_assets, 
                        "unrestricted_net_assets" : this.credit.unrestricted_net_assets,
                        "net_capital_assets" : this.credit.net_capital_assets, 
                        "total_net_assets" : this.credit.total_net_assets,
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata_rev['revBalanceSheet'].push(tmp_data);	
                } else {
                	window.alldata_rev['revBalanceSheet'][this.selected_item] = tmp_data;
                	//this.rev_credits[this.selected_item] = tmp_data;
                	const tmp_selected_item = this.selected_item;
                	this.$nextTick(this.select_item(0))
                	this.$nextTick(this.select_item(tmp_selected_item))
                }

                this.server_request();
	        	const addBtn = this.$el.querySelector('.create');
	        	addBtn.style.display = 'none';

            },

            select_item: function(params) {
            	this.selected_item = params;
            },

            server_request: function() {
            	this.$http.post(api_rev_url_post, JSON.stringify(alldata_rev), {
	            	headers : {
                    	'Content-Type' : 'application/json'
                    }
            	}).then((response) => {
            		console.log(response);
                }, (response) => {
                    console.log(response);
                });

            }
        }
    }
</script>
<style>
	td.active {background: green; color: white;}
</style>
