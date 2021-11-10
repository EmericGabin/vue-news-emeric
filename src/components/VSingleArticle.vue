<template>
  <div class="article">
        <article>
            <div class="container__article">
                <p class="article__title"><strong> Id : </strong> {{ articleId.id }}</p>
                <p class="article__title"><strong> Titre : </strong> {{ articleId.title }}</p>
                <p class="article__desc"><strong>Description : </strong> {{ articleId.body }}</p>
                <p class="article__idUser"><strong> Id de l'auteur : </strong>{{ articleId.userId }}</p>
            </div>
            
        </article>
    </div>
</template>

<script>
export default {
    props: ['articleId'],

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

button{
    margin-top: 5px;
    padding: 8px;
}
</style>