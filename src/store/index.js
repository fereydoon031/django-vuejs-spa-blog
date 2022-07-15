import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    isAuthenticated: false,
    token: ''
  },
  getters: {
  },
  mutations: {

    login(state,token){

      if(token){
        state.isAuthenticated =true
        state.token = token
        axios.defaults.headers.common['Authorization'] = "Token " + token

        localStorage.setItem("token",token)
      }else{
        state.isAuthenticated = false
        state.token = ''
        axios.defaults.headers.common['Authorization'] = ''
        localStorage.removeItem("token")
      }
    },
    logout(state){
      state.isAuthenticated = false
      state.token =  ''
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem("token")
    },
  },
  actions: {
    onStart(context){
      let token = localStorage.getItem("token")
      if(token){
        axios
        .get('/api/auth/users/me/')
        .then(response => {console.log(response)
          context.commit('login',token)
        })
        .catch(error=>{ console.log(error)
          context.commit('logout')
        })
        context.commit('login',token)
        axios.defaults.headers.common['Authorization'] = "Token " + token
      }else{
        context.commit('logout')
        axios.defaults.headers.common['Authorization'] = ''
      }
    }
  },
  modules: {
  }
})
