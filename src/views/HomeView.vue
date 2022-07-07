<template>
  <div class="home text-left">
    <h1> Home Page</h1>
    <article v-for="article in articles" :key="article.id">
    
    <h2 >{{article.title}}</h2>
    <p>
      {{article.abstract}}

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
