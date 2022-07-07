<template>
  <div class="Article text-left">
    <article >
        <h2>{{article.title}}</h2>
        <p>
            {{article.content}}
        </p>
    <hr>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  data() {
    let artcls = localStorage.getItem('articles')
    artcls = JSON.parse(artcls)
    let artcl = artcls.find(artcl => artcl.slug == this.$route.params.slug)

    return {
      article : artcl
    }
  },
}
</script>
