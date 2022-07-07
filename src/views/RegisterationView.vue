<template>
  <div class="RegisterId">

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
                        <h4 class="mt-1 mb-5 pb-1">Sign up For Free</h4>
                      </div>

                  <form @submit.prevent="doRegister" class="mx-1 mx-md-4">

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">Your Name</label>
                        <input
                          v-model="name"
                          :class="{
                          'is-invalid':nameE === true,
                          'is-valid':nameE === false }"
                          type="text"
                          id="form3Example1c" 
                          class="form-control"
                            />
                        <div class="invalid-feedback" v-if="nameE">
                          {{nameEM}}
                        </div>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Your Email</label>
                        <input
                         v-model="email"
                         type="email" 
                         id="form3Example3c" 
                         class="form-control" />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">Password</label>
                        <input
                          v-model="password"
                          :class="{
                          'is-invalid':passwordE === true,
                          'is-valid':passwordE === false }"
                          type="password" id="form3Example4c" class="form-control" />
                        <div class="invalid-feedback" v-if="passwordE">
                          {{passwordEM}}
                        </div>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                        <input
                          v-model="passwordV"
                          :class="{
                          'is-invalid':passwordVE === true,
                          'is-valid':passwordVE === false }"
                          type="password"
                          id="form3Example4cd"
                          class="form-control" />
                          <div class="invalid-feedback" v-if="passwordVE">
                          {{passwordVEM}}
                          </div>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        v-model="agreeStatements"
                        :class="{
                          'is-invalid':agreeStatementsE === true,
                          'is-valid':agreeStatementsE === false }"
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"/>
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                        <span class="invalid-feedback" v-if="agreeStatementsE">
                         {{agreeStatementsEM}}
                        </span>
                      </div>
                      

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg">Register</button>
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
  name: 'RegisterId',
  data(){
    return{
      name: '',
      email: '',
      password: '',
      passwordV: '',
      agreeStatements: '',
      nameE: null,
      passwordE: null,
      passwordVE: null,
      agreeStatementsE: null,
      nameEM: null,
      passwordEM: null,
      passwordVEM: null,
      agreeStatementsEM: false,
    }
  },
  methods:{
    doRegister(){
      let canRegister = true
      if(this.name.length < 3){
        canRegister =false
        this.nameE=true
        if(this.name.length == 0){
          this.nameEM = 'name required !'
        } else{
          this.nameEM = 'name must be atleaset 3 characters !'
        }
      }else {
        this.nameE = false
        this.nameEM = ''
      }
      if(this.password.length < 1){
        canRegister = false
        this.passwordE=true
        if(this.password.length == 0){
          this.passwordEM = 'Password required !'
        } else{
          this.passwordEM = 'Password must be atleaset 6 characters !'
        }
      }else if(this.password !== this.passwordV) {
          this.passwordE = false
          canRegister = false
          this.passwordVE=true
          this.passwordVEM = 'Password not match !'
      }
      else {
        this.passwordE = false
        this.passwordVE = false
        this.passwordEM = ''
        this.passwordVEM = ''

        if(this.agreeStatements===true){
          this.agreeStatementsE=false
          if(canRegister){
            this.$store.commit('login', this.email)
            this.$router.push("/profile") }
        }else if(this.agreeStatements==false){
          console.log('not checked')
          this.agreeStatementsE = true
                    console.log(this.agreeStatementsE)
          this.agreeStatementsEM = "Please read Terms of service and accepts this"
        }
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
.form-check-input {
    margin-left: -15rem;
}
</style>