<template>
  <div class="Article text-left">
    <article >
        <h2>{{article.title}}</h2>
        <p>
            {{article.content}}
        </p>
    <hr>
    </article>
     <button class="btn btn-warning mr-1" @click="edit = !edit">Edit</button>
    <button class="btn btn-danger mr-1">Remove</button>
    <hr>
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
 import {
    articlesData
} from "../data/articles";



export default {
  name: 'ArticleView',
  components: {
    'editor': Editor
  },
  data() {
    let artcls = localStorage.getItem('articles')
    artcls = JSON.parse(artcls)
    let article
    if(!artcls){
        let database= JSON.stringify(articlesData)
        localStorage.setItem('articles',database)
        article = articlesData.find(article => article.slug == this.$route.params.slug)
    }else{
        article = artcls.find(article => article.slug == this.$route.params.slug)
    }

    return {
      article : article,
      edit:false,
      artcls:artcls,
      title: article.title,
      slug: article.slug,
      abstract: article.abstract,
      content: article.content,
    }
  },
  methods:{
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
      this.$router.push('/article/' +  this.artcls[currentArticleIndex].slug)     },
  }
}
</script>
