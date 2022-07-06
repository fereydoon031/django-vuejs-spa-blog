<template>
  <div class="LogIn">
    <h1>This is an login page</h1>
<button class="btn btn-success" @click="doLogin">login</button>

</div>
</template>

<script>
export default {
  name: 'LogIn',
  methods:{
    doLogin(){
      this.$store.commit("login","123456" )
      this.$router.push("/profile")
    }
  },
}
</script>
