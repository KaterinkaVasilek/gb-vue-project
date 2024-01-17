<script setup>
import { ref } from 'vue';
import Header from '@/components/Header/Header.vue';
import Intro from '@/components/Intro/Intro.vue';
import Article from '@/components/Article/Article.vue';
import Tags from '@/components/Tags/Tags.vue';
import Articles from '@/components/Articles/Articles.vue';
import Footer from '@/components/Footer/Footer.vue';

const title = ref('');

</script>

<template>
  <div class="main-container">
    <h1 class="visually-hidden">Статья</h1>
    <Header />
    <Intro :heading = "title" 
           :isMain = 'false'
           :isArticle = 'true'
    />
    <div class="article-page container">
      <Article />
      <Tags />
    </div>
    <Articles isBlog />
    <Footer />
  </div>
</template>