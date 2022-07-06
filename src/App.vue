<template>

<NavBar/>
{{$store.state}}

<br/>

{{$route}}
  <router-view class="container"/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'AppView',
  components: {
    NavBar
  },
  watch:{
    $route(){
    this.$store.commit("onStart")
    }
  },
  mounted(){
    this.$store.commit("onStart")
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
