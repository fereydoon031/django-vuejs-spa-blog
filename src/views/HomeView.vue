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
    
    return {
      articles : [{
      id: '1',
      title: 'title 1',
      slug: 'title-1',
      abstract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.'
    },
    {
      id: '2',
      title: 'title 2',
      slug: 'title-2',
      abstract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.'
    },
    {
      id: '3',
      title: 'title 3',
      slug: 'title-3',
      abstract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.",
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.\n\
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam \n\
                 laboriosam perferendis officia sequi praesentium illum, ut in suscipit aut \n\
                 consequuntur, neque omnis. Qui nemo eaque exercitationem quibusdam.'
    }]
    }
  },
}

</script>
