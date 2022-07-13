<template>
  <div class="LogOut">
    <h1>This is an login page</h1>
    <div class="alert alert-danger"  v-if="logoutError">
      {{this.logoutError}}
    </div>
<button class="btn btn-danger" @click="doLogout">Logout</button>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LogOut',
  data(){
    return{
      logoutError: ''
    }
  },
  methods:{
    doLogout(){
      axios
        .post('/api/auth/token/logout/')
        .then(response => {
          this.$store.commit('logout',response.data.auth_token)
          this.$router.push("/login")
          })
        .catch(error=>{ console.log(error)
          
          if (error.response) {
            console.log(error.response.data)
            this.logoutError = error.response.data
          } else if (error.request) {

            console.log(error.request);
          } else {
            // Some other error
            console.log('Error', error.message);
          }
          })

      this.$store.commit("logout" )
      this.$router.push("/login")
    }
  },
}
</script>
