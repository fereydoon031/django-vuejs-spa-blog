<template>
  <div class="home text-left">
    <h1> Add Article Page</h1>
    <form v-if="!error" @submit.prevent="addArticle">
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
          <div class="form-group">
          <label for="exampleFormControlInput1">Thumbnail</label>
          <input type="text" class="form-control" placeholder="image address ..." v-model="thumb">
        </div>
        <button type="submit" class="btn btn-primary">Add Article</button>
    </form>
    <div v-if="error">
      <div class="alert alert-danger">There are something wrongs</div>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import axios from 'axios'
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
    slug: '',
    abstract: '',
    content: '',
    thumb: '',
    error:false,
    }
  },
  methods:{
    addArticle(){
      axios
        .post('/article/',{
              title:this.title,
              slug: this.slug,
              abstract: this.abstract,
              content: this.content,
              thumb: this.thumb
          })
        .then(response => {console.log(response.data),this.$router.push('/article/' + this.slug)})
        .catch(error=>(console.log(error),this.error=true))
      
    }
  },
}
</script>
