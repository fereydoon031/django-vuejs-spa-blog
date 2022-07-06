<template>
  <div class="LogOut">
    <h1>This is an login page</h1>
<button class="btn btn-danger" @click="doLogout">Logout</button>

</div>
</template>

<script>
export default {
  name: 'LogOut',
  methods:{
    doLogout(){
      this.$store.commit("logout" )
    }
  },
}
</script>
