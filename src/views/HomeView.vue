<template>
  <div class="home text-left">
    <h1> Home Page</h1>
    <article v-for="article in articles" :key="article.id">
    <h2> <router-link :to="'/article/'+ article.slug">{{article.title}}</router-link></h2>
    <p>
      {{article.abstract}}
      <router-link :to="'/article/'+ article.slug">Show more</router-link>
    </p>
<hr>
    </article>
    
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    let artcls = localStorage.getItem('articles')
    artcls = JSON.parse(artcls)
    return {
      articles : artcls
     
    }
  },
}

</script>
