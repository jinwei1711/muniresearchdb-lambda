<template>
	<div id="credit-go-home">
		<credit-home>
			<credit-go-navbar slot="credit-router-links"></credit-go-navbar>
		 </credit-home>	
	</div>
</template>
<script>
import Credit_GO_Navbar from 'credit/credit_navbars/credit_go_navbar.vue'
import Credit_Home from 'credit/shared/credit_home.vue'

	
export default {
	name: 'credit-go-home',
	components: {
		'credit-go-navbar': Credit_GO_Navbar,
		'credit-home': Credit_Home
	}
}
</script>
<style>
	
</style>
