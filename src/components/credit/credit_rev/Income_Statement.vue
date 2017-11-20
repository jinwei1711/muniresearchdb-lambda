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
	                <label name="credit_name">R</label>
	                <input type="text" class="form-control" v-model="credit.revenues" id="R" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">E</label>
	                <input type="text" class="form-control" v-model="credit.expenses" id="E" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">D</label>
	                <input type="text" class="form-control" v-model="credit.depreciation" id="D" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">IE</label>
	                <input type="text" class="form-control" v-model="credit.interest_expense" id="IE" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">EBITBA</label>
	                <input type="text" class="form-control" v-model="credit.ebitda" id="EBITBA" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">CNA</label>
	                <input type="text" class="form-control" v-model="credit.change_net_assets" id="CNA" >
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
							{{ value.revenues }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FV</td>
					<template v-for="val, key in rev_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.expenses }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.depreciation }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TGT</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.interest_expense }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TRD</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.ebitda }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TDL</td>
					<template v-for="val, key in rev_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.change_net_assets }}
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
		        	tmp_obj.revenues = tmp.values[0].revenues;
		        	tmp_obj.expenses = tmp.values[0].expenses;
		        	tmp_obj.depreciation = tmp.values[0].depreciation;
		        	tmp_obj.interest_expense = tmp.values[0].interest_expense;
		        	tmp_obj.ebitda = tmp.values[0].ebitda;
		        	tmp_obj.change_net_assets = tmp.values[0].change_net_assets;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata_rev['revIncomeStatement'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.rev_credits = alldata_rev['revIncomeStatement'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "revenues" : this.credit.revenues, 
                        "expenses" : this.credit.expenses, 
                        "depreciation" : this.credit.depreciation, 
                        "interest_expense" : this.credit.interest_expense,
                        "ebitda" : this.credit.ebitda, 
                        "change_net_assets" : this.credit.change_net_assets,
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata_rev['revIncomeStatement'].push(tmp_data);	
                } else {
                	window.alldata_rev['revIncomeStatement'][this.selected_item] = tmp_data;
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
