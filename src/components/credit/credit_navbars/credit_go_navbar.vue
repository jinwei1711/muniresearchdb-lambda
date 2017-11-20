<template>

		<ul id="credit-go-links" class="credit-tabs">
			<router-link
				 to='credit-description' 
				 tag='li' 
				 active-class='active' 
				 exact
				 :class="{'is-active': isActive}" 
				 ><a>Description</a>
			</router-link>
			<router-link
				 to='socio-economics' 
				 tag='li' 
			   	 active-class='active' 
				 exact
				 :class="{'is-active': isActive}" 
				 ><a>Socio-Economics</a>	
			</router-link>

			<router-link 
				to='debt-profile' 
				tag='li' 
				active-class='active' 
				exact
				 :class="{'is-active': isActive}" 
				><a>Debt Profile</a>		
			</router-link>
			<router-link 
				to='general-fund' 
				tag='li' 
				active-class='active' 
				exact
				 :class="{'is-active': isActive}" 
				><a>General Fund</a>		
			</router-link>
			<router-link 
				to='government-activities' 
				tag='li' 
				active-class='active' 
				exact
				 :class="{'is-active': isActive}" 
				><a>Governmental Activities</a>				
			</router-link>
			<router-link 
				to='net-position' 
				tag='li' 
				active-class='active' 
				exact
				 :class="{'is-active': isActive}" 
				><a>Net Position</a>		
			</router-link>				
		</ul>	

</template>
<script>

	export default {
		name: 'credit-go-navbar',
		data() {
			return {
				isActive: false
			}
		}
	}
</script>
<style scoped>

	.credit-tabs {
		list-style: none;
		display: flex;
		justify-content: space-around;
	}

	.credit-tabs a:hover {
		background-color: #fff;
	}

	.credit-tabs li {
		flex: 1 1 100%;
		background-image: linear-gradient(
		    to bottom,
		    transparent 50%,
		    rgba(162,211,156, 1) 50%,
		    rgba(162,211,156,1) 95%,
		    rgba(124,197,118,1) 95%
		  );
		  background-size: 100% 200%;
		  background-position: top center;
		  color: #666;
		  display: block;
		  text-align: center;
		  text-decoration: none;
		  transition: all .25s ease-in-out;
	}

	li.active {

	}

	.credit-tabs a {
		text-decoration: none;

	}

	a {
		color: #666;
	    display: block;
	    padding: 1rem 0;
	    transition: all .25s ease-in-out;
	}

</style>
