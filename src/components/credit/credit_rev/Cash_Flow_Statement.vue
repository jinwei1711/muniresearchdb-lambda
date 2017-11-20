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
	                <label name="credit_name">CFO</label>
	                <input type="text" class="form-control" v-model="credit.cash_flow_operations" id="CFO" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">CFI</label>
	                <input type="text" class="form-control" v-model="credit.cash_flow_investing" id="CFI" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">CFF</label>
	                <input type="text" class="form-control" v-model="credit.cash_flow_financing" id="CFF" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">CFN</label>
	                <input type="text" class="form-control" v-model="credit.cash_flow_nonfinancing" id="CFN" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">PP</label>
	                <input type="text" class="form-control" v-model="credit.principal_payments" id="PP" >
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
					<td>FV</td>
					<template v-for="val, key in rev_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.cash_flow_operations }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.cash_flow_investing }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TGT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.cash_flow_financing }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TRD</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.cash_flow_nonfinancing }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TDL</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.principal_payments }}
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
		        	tmp_obj.cash_flow_operations = tmp.values[0].cash_flow_operations;
		        	tmp_obj.cash_flow_investing = tmp.values[0].cash_flow_investing;
		        	tmp_obj.cash_flow_financing = tmp.values[0].cash_flow_financing;
		        	tmp_obj.cash_flow_nonfinancing = tmp.values[0].cash_flow_nonfinancing;
		        	tmp_obj.principal_payments = tmp.values[0].principal_payments;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata_rev['revCashFlowStatement'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.rev_credits = alldata_rev['revCashFlowStatement'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "cash_flow_operations" : this.credit.cash_flow_operations, 
                        "cash_flow_investing" : this.credit.cash_flow_investing, 
                        "cash_flow_financing" : this.credit.cash_flow_financing, 
                        "cash_flow_nonfinancing" : this.credit.cash_flow_nonfinancing,
                        "principal_payments" : this.credit.principal_payments,
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata_rev['revCashFlowStatement'].push(tmp_data);	
                } else {
                	window.alldata_rev['revCashFlowStatement'][this.selected_item] = tmp_data;
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
