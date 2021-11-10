<template>
  <div class="home__container">
      <h1>Page Home</h1>
      <div class="articles">
          <VArticles v-for="article in articles" :article="article" :key="article.id" ></VArticles>
          <button @click="moreArticles()"  ref="more" class="bg-gray-400 rounded">Voir plus d'articles</button> 
          <button @click="lessArticles()" ref="less" class="bg-red-400 rounded">Voir moins d'articles</button> 
      </div>
  </div>
</template>

<script>
import VArticles from '../components/VArticles.vue'
import * as API from '../core/api'

export default {
    name: 'Home',
    data(){
        return{
            articles: [],   
            limit: 10,
            page: 0,
            total: 0, 
        }
    },

    components: {
        VArticles
    },

    created(){
        API.getArticles().then((data) => {this.articles = data} )
    },

    updated(){
        this.isLast()
    },

    methods:{
        moreArticles(){
            API.getArticles(this.limit+=30, 0).then((data) => {this.articles = data} )
        },

        lessArticles(){
            API.getArticles(this.limit-=30, 0).then((data) => {this.articles = data} )
        
        },

        isLast(){
            if(this.limit >= 100){
                console.log(this.articles.length)
                this.$refs.more.style.display = "none"
            }
            else{
                this.$refs.more.style.display = "block"
            }

            if(this.limit <= 0){
                console.log(this.articles.length)
                this.$refs.less.style.display = "none"
            }
            else{
                this.$refs.less.style.display = "block"
            }
        },
    }

    
}
</script>

<style>
.articles{
    margin: 0 auto;
    max-width: 300px;
}

button{
    margin: 10px;
    padding: 8px;
}
</style>