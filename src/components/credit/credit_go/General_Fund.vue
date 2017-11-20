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
	                <label name="credit_name">PTR</label>
	                <input type="text" class="form-control" v-model="credit.property_tax_revenues" id="AV" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">TR</label>
	                <input type="text" class="form-control" v-model="credit.total_revenues" id="TR" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TE</label>
	                <input type="text" class="form-control" v-model="credit.total_expenes" id="TE" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">FB</label>
	                <input type="text" class="form-control" v-model="credit.fund_balance" id="FB" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">UFB</label>
	                <input type="text" class="form-control" v-model="credit.unrestricted_fund_balance" id="UFB" >
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
							{{ value.property_tax_revenues }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TR</td>
					<template v-for="val, key in go_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_revenues }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TE</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_expenes }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FB</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.fund_balance }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>UFB</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.unrestricted_fund_balance }}
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
		        	tmp_obj.property_tax_revenues = tmp.values[0].property_tax_revenues;
		        	tmp_obj.total_revenues = tmp.values[0].total_revenues;
		        	tmp_obj.total_expenes = tmp.values[0].total_expenes;
		        	tmp_obj.fund_balance = tmp.values[0].fund_balance;
		        	tmp_obj.unrestricted_fund_balance = tmp.values[0].unrestricted_fund_balance;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata['goGeneralFund'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.go_credits = alldata['goGeneralFund'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "property_tax_revenues" : this.credit.property_tax_revenues, 
                        "total_revenues" : this.credit.total_revenues, 
                        "total_expenes" : this.credit.total_expenes,
                        "fund_balance" : this.credit.fund_balance, 
                        "unrestricted_fund_balance" : this.credit.unrestricted_fund_balance, 
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata['goGeneralFund'].push(tmp_data);	
                } else {
                	window.alldata['goGeneralFund'][this.selected_item] = tmp_data;
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
