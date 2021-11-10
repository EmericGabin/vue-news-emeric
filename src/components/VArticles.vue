<template>
  <div class="article">
        <article>
            <div class="container__article">
                <p class="article__title"><strong> Titre : </strong> {{ article.title }}</p>
                <p class="article__desc"><strong>Description : </strong> {{ article.body }}</p>
                <p class="article__idUser"><strong> Id de l'auteur : </strong>{{ article.userId }}</p>
                <button @click.stop="getIdArticle()" class="bg-gray-400 rounded">Voir plus</button>
            </div>
            
        </article>
    </div>
</template>

<script>
export default {
    props: ['article'],

    methods:{
        getIdArticle(){
            window.location.href = `http://localhost:1234/single/${this.article.id}`
        }
    }
}
</script>

<style>
.article{
    margin: 10px;
    padding-top: 15px;
    border: 2px solid black;
    border-radius: 25px;
}
.container__article{
    margin: 13px
}
</style>