<template>
	<div id="credit-home-template">
		<nav class="content-nav">
			<div class="credit-nav-search">

				<input type="search" name="cusip-search" placeholder="cusip"><button><i class="material-icons" id='cusip-search'>search</i></button>

			</div>
			<div class="credit-nav-tabs">
				<slot name="credit-router-links"></slot>
			</div>			
	    </nav>
	    <!-- Main Content -->
	    <div class="main-content" slot="main-content">
				<!-- Display Router-View Pages -->
				<router-view></router-view>
	    </div>
	</div>
</template>
<script>
export default {
	name: 'credit-home'
}
	
</script>
<style>

 .content-nav {
 	display: grid;
 	grid-template-rows: 1fr 2fr;
 }

 .credit-nav-search {
 	grid-row-start: 1;
 	grid-row-end: 2;
 }

 .credit-nav-tabs: {
 	grid-row-start: 2;
 	grid-row-end: 3;
 }

#cusip-search {
	font-size: 15px;
}
	
</style>
