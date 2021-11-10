<template>
  <div class="single__container">
      <h1>Single : {{ $route.params.id }}</h1>
      <VSingle :articleId="article"></VSingle>
  </div>
</template>

<script>
import VSingle from '../components/VSingleArticle.vue'
import * as API from '../core/api'

export default {
    
    name: 'Single',

    data(){
        return{
            article: {
                userId: null,
                id: null,
                title: null,
                body: null
            }    
        }
    },

    components: {
        VSingle
    },

    created(){
        API.getArticleById(this.$route.params.id).then((data) => {this.article = data} )
    }
}
</script>

<style>

</style>