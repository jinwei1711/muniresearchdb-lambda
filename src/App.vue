<template>
  <div id="app" class="page-layout">
    <page-header></page-header>
    <page-sidebar></page-sidebar>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>

window.alldata = {};
window.alldata_rev = {};
window.api_go_url = "https://089balkyh6.execute-api.us-east-2.amazonaws.com/prod/gocredits";
window.api_go_url_post = "https://089balkyh6.execute-api.us-east-2.amazonaws.com/prod/gocredits-post";
window.api_rev_url = "https://089balkyh6.execute-api.us-east-2.amazonaws.com/prod/revcredits";
window.api_rev_url_post = "https://089balkyh6.execute-api.us-east-2.amazonaws.com/prod/revcredits-post";

import Page_Header from './components/pageLayout/Page_Header.vue';
import Page_Footer from './components/pageLayout/Page_Footer.vue';
import Page_Main from './components/pageLayout/Page_Main.vue';
import Page_Sidebar from './components/pageLayout/Page_Sidebar.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'page-header': Page_Header,
    'page-sidebar': Page_Sidebar,
    'page-main': Page_Main,
    'page-footer': Page_Footer
  },
  mounted () {
    this.fetchProductData()
  },
  methods: {
    fetchProductData: function()
    {
        this.$http.get(api_go_url).then((response) => {
          var data = JSON.parse(response.bodyText);
            window.alldata = data[0];
        }, (response) => {

        });

        this.$http.get(api_rev_url).then((response) => {
          var data = JSON.parse(response.bodyText);
            window.alldata_rev = data[0];
        }, (response) => {

        });
    },
  }
}

</script>

<style>

.page-layout {
  display: grid;
  height: 100vh;
  width: 100vw;
  color: #717274;
  font-family: Arial, Helvetica, sans-serif;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-areas: 
    "header header"
    "sidebar main-content"
    "footer footer"
}

</style>
