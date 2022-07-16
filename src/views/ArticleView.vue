<template>
  <div class="Article text-left">
    <article >
        <h2>{{article.title}}</h2>
        <p>
            {{article.content}}
        </p>
    <hr>
    </article>
    <div  v-if="$store.state.isAuthenticated">
      <button class="btn btn-warning mr-1" @click="edit = !edit">Edit</button>
      <button class="btn btn-danger  mr-1" @click="removeArticle">Remove</button>
      <hr>
    </div>
     <form @submit.prevent="doEdit" v-if="edit">
        <div class="form-group">
          <label for="exampleFormControlInput1">Title Page</label>
          <input type="text" class="form-control" id="exampleInput1" placeholder="Your title ..." v-model="title">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Abstract</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="abstract"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <editor api-key="no-api-key"  v-model="content" />
        </div>
        <button type="submit" class="btn btn-warning mb-2" >Edit Article</button>
    </form>
  </div>
</template>

<script>

import Editor from '@tinymce/tinymce-vue'
 
 /*import {
    articlesData
} from "../data/articles";
*/
import axios from 'axios';

export default {
  name: 'ArticleView',
  components: {
    'editor': Editor
  },
  data() {
    return {
      article : "",
      edit:false,
    }
  },
  mounted(){
    axios
      .get(`article/${this.$route.params.slug}/`)
      .then(response => ( this.article = response.data))
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
  methods:{
    /*
    doEdit(){
      let artcls = localStorage.getItem('articles')
      artcls = JSON.parse(artcls)
      let currentArticleIndex
      if(!artcls){
          let database= JSON.stringify(articlesData)
          localStorage.setItem('articles',database)
          artcls = database
          currentArticleIndex = articlesData.findIndex(article => article.slug == this.$route.params.slug)
      }else{
          currentArticleIndex = artcls.findIndex(article => article.slug == this.$route.params.slug)
      }

      for (var i = 0; i < artcls.length; i++) {
        if (i === currentArticleIndex) {
            this.artcls[currentArticleIndex].title = this.title,
            this.artcls[currentArticleIndex].abstract = this.abstract,
            this.artcls[currentArticleIndex].content = this.content
            break;
        }
      }
      let database= JSON.stringify(this.artcls)
      localStorage.setItem('articles',database)
      this.$router.push('/article/' +  this.artcls[currentArticleIndex].slug)},
      */
      getImgUrl: function (img) {
        console.log(img)
        return require('@/assets/img/details/' + img);
      },
      /*
      removeArticle(){
      let artcls = localStorage.getItem('articles')
      artcls = JSON.parse(artcls)
      let currentArticleIndex
      if(!artcls){
          let database= JSON.stringify(articlesData)
          localStorage.setItem('articles',database)
          artcls = database
          currentArticleIndex = articlesData.findIndex(article => article.slug == this.$route.params.slug)
      }else{
          currentArticleIndex = artcls.findIndex(article => article.slug == this.$route.params.slug)
      }

      this.artcls.splice(currentArticleIndex,1)
      let database= JSON.stringify(this.artcls)
      localStorage.setItem('articles',database)
      this.$router.push('/')
      }*/
  }
}
</script>
