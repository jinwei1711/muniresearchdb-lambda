<template>
  <nav class="vertical-menu">
    <ul class="vertical-menu-list">

      <router-link 
          :to="{ name: 'dashboard' }" 
          tag='li' 
          active-class='active' 
          exact
          class="menu-item"
          ><a>Dashboard</a>
      </router-link>

      <p class="menu-heading">Credit</p>

      <router-link 
          :to="{ name: 'credit-data'}" 
          tag='li' 
          active-class='active' 
          exact
          class="menu-item"
          ><a>Data Management</a>         
      </router-link>

      <router-link 
          :to="{ name: 'credit-go'}" 
          tag='li' 
          active-class='active'
          exact
          class="menu-item" 
          ><a>GO Credits</a>    
      </router-link>

      <router-link 
          :to="{ name: 'credit-revenue'}"
          tag='li' 
          active-class='active' 
          exact
          class="menu-item" 
          ><a>Revenue Credits</a>    
      </router-link>

      <router-link 
          :to="{ name: 'credit-reports'}"
          tag='li' 
          active-class='active' 
          exact
          class="menu-item" 
          ><a>Credit Reporting</a>          
      </router-link>

    </ul>

  </nav>

</template>
<script>

export default {
  name: 'sidebar-menu'

}
</script>
<style>

.vertical-menu {
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
}

.vertical-menu-list {
    grid-row-start: 2;
    grid-row-end: 3;
    list-style: none;
    border: 1px solid black;
}

.menu-item a {
    text-decoration: none;
    color: black;
}

.menu-item {
    padding-top: .5em;    
}

.menu-item:hover {
    background-color: #fff;
}

</style>