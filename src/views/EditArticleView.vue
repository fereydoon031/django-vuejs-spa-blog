<template>
  <div class="Article text-left">
    <article >
        <h2>{{article.title}}</h2>
        <p>
            {{article.content}}
        </p>
    <hr>
    </article>
    <button class="btn btn-warning mr-1">Edit</button>
    <button class="btn btn-danger mr-1">Remove</button>
    <hr>
     <form @submit.prevent="EditArticleView">
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
        <button type="submit" class="btn btn-primary">Edit Article</button>
    </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'


export default {
  name: 'EditArticleView',
  components: {
    'editor': Editor
  },
  data() {
    let articles = localStorage.getItem('articles')
    articles = JSON.parse(articles)
    let article = articles.find(artcl => artcl.slug == this.$route.params.slug)
    article ={
        id: this.id,
        title: this.title,
        slug: this.title,
        abstract: this.abstract,
        content: this.content
    }

    return {
        article:article,
        title: this.title,
        id: this.id,
        slug: this.slug,
        abstract: this.abstract,
        content: this.content,
    }
    },
  }
</script>