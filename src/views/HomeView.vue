<template>
  <div class="home text-left">
    <h1> Home Page</h1>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="article in articles" :key="article.id">
      
            <div class="card mb-5 shadow-sm">
              <img class="img-fluid rounded" v-bind:src="getImgUrl(article.thumb)" />

              <div class="card-body">
                <div class="card-title">
                  <h2><router-link :to="'/article/'+ article.slug">{{article.title}}</router-link></h2>
                </div>
                <div class="card-text">
                  <p>
                    {{article.abstract.substring(0,100)+".." }}
                  </p>
                </div>
              <router-link class="btn btn-outline-primary rounded-0 float-end" :to="'/article/'+ article.slug">Read More</router-link> 
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>

//import {
 //   articlesData
//} from "../data/articles";
import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      articles : ""
    }
  },
  mounted(){
      axios
        .get('/article/')
        .then(response => (this.articles = response.data))
        .catch(error=>{ console.log(error)
          if (error.response) {
            console.log(error.response)   
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
      })
    },
  methods: {
    getImgUrl: function (img) {
      return require('@/assets/img/details/' + img);
    },
  },
}

</script>
<style scoped>
.h2, h2 {
    font-size: 1.2rem;
}
</style>