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
	                <label name="credit_name">FAPC</label>
	                <input type="text" class="form-control" v-model="credit.full_value_per_capita" id="FAPC" >
	            </div>

	            <div class="form-group">
	                <label name="credit_name">DDPC</label>
	                <input type="text" class="form-control" v-model="credit.direct_debt_per_capita" id="DDPC" >
	            </div>
	            <div class="form-group">
	                <label name="credit_name">DDFV</label>
	                <input type="text" class="form-control" v-model="credit.direct_debt_full_value" id="DDFV" >
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
							{{ value.full_value_per_capita }}
						</td>
					</template>
				</tr>
				<tr>
					<td>TR</td>
					<template v-for="val, key in go_credits" >      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.direct_debt_per_capita }}
						</td>           
					</template> 
				</tr>
				<tr>
					<td>TE</td>
					<template v-for="val, key in go_credits">      
						<td v-for="value in val.values" @click="select_item(key)" :class="{ active: key == selected_item }" >
							{{ value.direct_debt_full_value }}
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
		        	tmp_obj.full_value_per_capita = tmp.values[0].full_value_per_capita;
		        	tmp_obj.direct_debt_per_capita = tmp.values[0].direct_debt_per_capita;
		        	tmp_obj.direct_debt_full_value = tmp.values[0].direct_debt_full_value;


		        	this.credit = tmp_obj;

		        	const addBtn = this.$el.querySelector('.create');
		        	addBtn.style.display = 'block';	
	        	}	        	
	        },

	        click_delete: function() {

		        if (this.selected_item != -1) {
		        	window.alldata['goRatios'].splice(this.selected_item, 1);
		        	this.server_request();
		        }

	        },

            fetchProductData: function()
            {

                this.go_credits = alldata['goRatios'];
            },

            addProfile: function() {

                this.credit.value = {}

                const tmp_data =  {
                    dateOf: this.credit.dateOf,
                    values: [{
                        "full_value_per_capita" : this.credit.full_value_per_capita, 
                        "direct_debt_per_capita" : this.credit.direct_debt_per_capita, 
                        "direct_debt_full_value" : this.credit.direct_debt_full_value,
                    }]
                };


                if (this.selected_item == -1) {
                	window.alldata['goRatios'].push(tmp_data);	
                } else {
                	window.alldata['goRatios'][this.selected_item] = tmp_data;
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
