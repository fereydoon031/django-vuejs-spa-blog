<template>
  <div class="LogIn">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black shadow rounded">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style="width: 185px;" alt="logo">
                    <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                  </div>

                  <form @submit.prevent="doLogin">
                    <p>Please login to your account</p>

                    <div class="form-outline mb-4">
                     <div class="col">
                        <label class="form-label" for="form2Example11">Username</label>

                        <input
                          v-model="username"
                          :class="{
                            'is-invalid':usernameE === true,
                            'is-valid':usernameE === false
                            }"
                          type="email"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Phone number or email address"/>
                          <div class="invalid-feedback" v-if="usernameE">
                          {{usernameEM}}
                        </div>
                     </div>
                    </div>

                    <div class="form-outline mb-4">
                      <div class="col">
                        <label class="form-label" for="form2Example22">Password</label>
                        <input
                        v-model="password"
                        :class="{
                          'is-invalid' :passwordE === true,
                          'is-valid' :passwordE === false
                          }"
                        type="password"
                        id="form2Example22"
                        class="form-control"  />
                        <div class="invalid-feedback" v-if="passwordE">
                          {{passwordEM}}
                        </div>
                      </div>
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                        in</button>
                      <a class="text-muted" href="#!">Forgot password?</a>
                    </div>

                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <router-link to="/register"> <button type="button" class="btn btn-outline-success" >Create new</button> </router-link> 
                    </div>

                  </form>

                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data(){
    return{
      username: '',
      password: '',
      usernameE: null,
      passwordE: null,
      usernameEM: null,
      passwordEM: null,
    }
  },
  methods:{
    doLogin(){
      let access = true
      if(this.username.length <5){
        this.usernameE=true
         access = false
        if(this.username.length == 0){
          this.usernameEM = 'Username required !'
        } else{
          this.usernameEM = 'Username must be atleaset 5 characters !'
        }
      }else {
        this.usernameE = false
        this.usernameEM = ''
      }


      if(this.password.length < 6){
        access = false
        this.passwordE=true
        if(this.password.length == 0){
          this.passwordEM = 'Password required !'
        } else{
          this.passwordEM = 'Password must be atleaset 6 characters !'
        }
      }else {
        this.passwordE = false
        this.passwordEM = ''
      }

      console.log(this.username)
      console.log(this.password)
      if(access){
        this.$store.commit('login', this.username)
        this.$router.push("/profile")
      }
    }
  },
}
</script>
<style scoped>
.gradient-custom-2 {
/* fallback for old browsers */
background: #fccb90;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, #0054d2, #0881e9, #383cff, #0a3598);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, #0054d2, #0881e9, #383cff, #0a3598);
}


@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}
</style>