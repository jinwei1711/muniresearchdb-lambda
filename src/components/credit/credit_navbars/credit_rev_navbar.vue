<template>

		<ul id="credit-rev-links">
			<router-link 
				:to="{ name: 'credit-description'}" 
				tag='li' 
				active-class='active' 
				exact><a>Description</a>	
			</router-link>	
			<router-link 
				:to="{ name: 'income-statement'}"
				tag='li' 
				active-class='active' 
				exact><a>Income Statement</a>				
			</router-link>
			<router-link 
				:to="{ name: 'balance-sheet' }"
				tag='li' 
				active-class='active' 
				exact><a>Balance Sheet</a>				
			</router-link>
			<router-link 
				:to="{ name: 'cash-flow-statement' }"
				tag='li' 
				active-class='active' 
				exact><a>Cash Flow Statement</a>				
			</router-link>		
		</ul>			

</template>

<script>
	export default {
		name: 'credit-rev-navbar',
	}
</script>
<style scoped>

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: #fff;
		text-decoration: underline;
	}
</style>
