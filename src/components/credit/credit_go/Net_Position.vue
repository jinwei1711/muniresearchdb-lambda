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
	                <label name="credit_name">CASH</label>
	                <input type="text" class="form-control" v-model="credit.cash" id="CASH" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">CA</label>
	                <input type="text" class="form-control" v-model="credit.current_assets" id="CA" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TA</label>
	                <input type="text" class="form-control" v-model="credit.total_assets" id="TA" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">CL</label>
	                <input type="text" class="form-control" v-model="credit.current_liabilities" id="CL" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">TB</label>
	                <input type="text" class="form-control" v-model="credit.total_debt" id="TB" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">TL</label>
	                <input type="text" class="form-control" v-model="credit.total_liabilities" id="TL" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">NPL</label>
	                <input type="text" class="form-control" v-model="credit.net_pension_liability" id="NPL" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">UNS</label>
	                <input type="text" class="form-control" v-model="credit.unrestricted_net_assets" id="UNS" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">NA</label>
	                <input type="text" class="form-control" v-model="credit.net_assets" id="NA" >
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
							{{ value.cash }}
						</td>
					</template>
				</tr>
				<tr>
					<td>FV</td>
					<template v-for="val, key in go_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.current_assets }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TTT</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_assets }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TGT</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.current_liabilities }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TRD</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_debt }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TDL</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.total_liabilities }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TDD</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.net_pension_liability }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TDD</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.unrestricted_net_assets }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TDD</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.net_assets }}
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
		        	tmp_obj.cash = tmp.values[0].cash;
		        	tmp_obj.current_assets = tmp.values[0].current_assets;
		        	tmp_obj.total_assets = tmp.values[0].total_assets;
		        	tmp_obj.current_liabilities = tmp.values[0].current_liabilities;
		        	tmp_obj.total_debt = tmp.values[0].total_debt;
		        	tmp_obj.total_liabilities = tmp.values[0].total_liabilities;
		        	tmp_obj.net_pension_liability = tmp.values[0].net_pension_liability;
		        	tmp_obj.unrestricted_net_assets = tmp.values[0].unrestricted_net_assets;
		        	tmp_obj.net_assets = tmp.values[0].net_assets;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata['goNetPosition'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.go_credits = alldata['goNetPosition'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "cash" : this.credit.cash, 
                        "current_assets" : this.credit.current_assets, 
                        "total_assets" : this.credit.total_assets, 
                        "current_liabilities" : this.credit.current_liabilities,
                        "total_debt" : this.credit.total_debt, 
                        "total_liabilities" : this.credit.total_liabilities, 
                        "net_pension_liability" : this.credit.net_pension_liability,
                        "unrestricted_net_assets" : this.credit.unrestricted_net_assets, 
                        "net_assets" : this.credit.net_assets,
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata['goNetPosition'].push(tmp_data);	
                } else {
                	window.alldata['goNetPosition'][this.selected_item] = tmp_data;
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
