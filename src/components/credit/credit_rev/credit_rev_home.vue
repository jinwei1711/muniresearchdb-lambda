<template>
	<div id="credit-rev-home">
		<credit-home>
			<credit-rev-navbar slot="credit-router-links"></credit-rev-navbar>	
		 </credit-home>	
	</div>
</template>
<script>
import Credit_Rev_Navbar from 'credit/credit_navbars/credit_rev_navbar.vue'
import Credit_Home from 'credit/shared/credit_home.vue'

	
export default {
	name: 'credit-rev-home',
	components: {
		'credit-rev-navbar': Credit_Rev_Navbar,
		'credit-home': Credit_Home
	}
}
</script>
<style>
	
</style>
