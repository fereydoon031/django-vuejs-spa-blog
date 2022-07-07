<template>
  <div class="home text-left">
    <h1> Add Article Page</h1>
    <form @submit.prevent="addArticle">
        <div class="form-group">
          <label for="exampleFormControlInput1">Title Page</label>
          <input type="text" class="form-control" id="exampleInput1" placeholder="Your title ..." v-model="title">
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Slug</label>
          <input type="text" class="form-control" id="exampleInput1" placeholder="Your title ..." v-model="slug">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Abstract</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="abstract"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <editor api-key="no-api-key"  v-model="content" />
        </div>
        <button type="submit" class="btn btn-primary">Add Article</button>
    </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'AddArticleView',
    components: {
    'editor': Editor
  },
  data() {
    let articles = localStorage.getItem('articles')
    articles = JSON.parse(articles)

    return{
    articles:articles,
    title: '',
    id: '',
    slug: '',
    abstract: '',
    content: '',
    }
  },
  methods:{
    addArticle(){
      let article 
      article ={
        id: this.id,
        title: this.title,
        slug: this.title.replaceAll(' ','-'),
        abstract: this.abstract,
        content: this.content
      }
      this.articles.push(article)
      let database= JSON.stringify(this.articles)
      localStorage.setItem('articles',database)
      this.$router.push('/article/' + this.slug) 
    }
  },
}
</script>
