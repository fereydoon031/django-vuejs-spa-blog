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
        <div class="form-group">
          <label for="exampleFormControlInput1">Image Url</label>
          <input type="text" class="form-control" placeholder="Image url ..." v-model="thumb">
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
      title:'',
      abstract:'',
      content:'',
      thumb:'',
    }
  },
  mounted(){
    axios
      .get(`article/${this.$route.params.slug}/`)
      .then(response => {
        this.article = response.data,
        this.title = this.article.title,
        this.slug = this.article.slug,
        this.abstract = this.article.abstract,
        this.content = this.article.content,
        this.thumb = this.article.thumb
        })
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
    
    doEdit(){
      axios
        .put(`article/${this.$route.params.slug}/`,{
            title:this.title,
            slug: this.slug,
            abstract: this.abstract,
            content: this.content,
            thumb: this.thumb
          })
        .then(response => {
          console.log(response.data),
          this.$router.push('/article/' + this.slug),
          this.edit = false
          })
        .catch(error=>(console.log(error),this.error=true))
      },
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
