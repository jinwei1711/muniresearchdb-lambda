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
	                <label name="credit_name">AV</label>
	                <input type="text" class="form-control" v-model="credit.assessed_value" id="AV" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">FV</label>
	                <input type="text" class="form-control" v-model="credit.full_value" id="FV" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TTT</label>
	                <input type="text" class="form-control" v-model="credit.top_ten_taxpayers" id="TTT" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TGT</label>
	                <input type="text" class="form-control" v-model="credit.total_go_debt" id="TGT" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TRD</label>
	                <input type="text" class="form-control" v-model="credit.total_revenue_debt" id="TRD" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">TDL</label>
	                <input type="text" class="form-control" v-model="credit.total_debt_limit" id="TDL" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TDD</label>
	                <input type="text" class="form-control" v-model="credit.total_direct_debt" id="TDD" >
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
					<th  v-for="dt in go_credits">
						{{ dt.dateOf }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>AV</td>
					<template v-for="val, key in go_credits">
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.assessed_value }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FV</td>
					<template v-for="val, key in go_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.full_value }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.top_ten_taxpayers }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TGT</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_go_debt }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TRD</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_revenue_debt }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TDL</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_debt_limit }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TDD</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_direct_debt }}
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
                go_credits: [],
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
		        	const tmp = this.go_credits[this.selected_item];

		        	tmp_obj.dateOf = tmp.dateOf;
		        	tmp_obj.assessed_value = tmp.values[0].assessed_value;
		        	tmp_obj.full_value = tmp.values[0].full_value;
		        	tmp_obj.top_ten_taxpayers = tmp.values[0].top_ten_taxpayers;
		        	tmp_obj.total_go_debt = tmp.values[0].total_go_debt;
		        	tmp_obj.total_revenue_debt = tmp.values[0].total_revenue_debt;
		        	tmp_obj.total_debt_limit = tmp.values[0].total_debt_limit;
		        	tmp_obj.total_direct_debt = tmp.values[0].total_direct_debt;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata['goDebtProfile'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.go_credits = alldata['goDebtProfile'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "assessed_value" : this.credit.assessed_value, 
                        "full_value" : this.credit.full_value, 
                        "top_ten_taxpayers" : this.credit.top_ten_taxpayers, 
                        "total_go_debt" : this.credit.total_go_debt,
                        "total_revenue_debt" : this.credit.total_revenue_debt, 
                        "total_debt_limit" : this.credit.total_debt_limit, 
                        "total_direct_debt" : this.credit.total_direct_debt,
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata['goDebtProfile'].push(tmp_data);	
                } else {
                	window.alldata['goDebtProfile'][this.selected_item] = tmp_data;
                	//this.go_credits[this.selected_item] = tmp_data;
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
            	this.$http.post(api_go_url_post, JSON.stringify(alldata), {
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
