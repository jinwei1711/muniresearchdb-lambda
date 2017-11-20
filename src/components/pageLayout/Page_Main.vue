<template>
	<main class="page-content">
		<router-view></router-view>
  	</main>
</template>
<script>
	export default {
		name: 'page-main'
	}
	
</script>

<style>

	.page-content {
	  grid-area: main-content;
	  background-color: #ffff64;
	  display: grid;
	  grid-template-columns: 1fr;
	  grid-template-rows: 1fr 2fr;
	  grid-template-areas: "content-nav" "main-content"
	}

	.content-nav {
	  grid-area: content-nav;
	  background-color: lightgrey;
	}

	.main-content {
	  grid-area: main-content;
	}
</style>
