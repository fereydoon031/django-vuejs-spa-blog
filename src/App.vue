<template>

<NavBar/>
<br/>
  <router-view class="container"/>
  <FooterComponent/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'AppView',
  components: {
    NavBar,
    FooterComponent
},
  watch:{
    $route(){  this.$store.dispatch("onStart")
    }
  },
  mounted(){
    this.$store.dispatch("onStart")
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
