<template>
  <nav class="page-sidebar">
  	<sidebar-menu></sidebar-menu>
  </nav>	
</template>
<script>
import Sidebar_Menu from './Sidebar_Menu.vue'

	export default {
		name: 'page-sidebar',
		components: {
			'sidebar-menu': Sidebar_Menu
		}		
	}
</script>
<style>

	.page-sidebar {
	  grid-area: sidebar;
	  background-color: #ffa08c;
	}
	
</style>
