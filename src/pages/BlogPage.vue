<script setup>
import { ref } from 'vue';
import Header from '@/components/Header/Header.vue';
import Intro from '@/components/Intro/Intro.vue';
import Post from '@/components/Post/Post.vue';
import Articles from '@/components/Articles/Articles.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import Footer from '@/components/Footer/Footer.vue';

const title = ref('Articles & News')

</script>

<template>
  <div class="main-container blog-page">
    <Header />
    <Intro :heading = "title" 
           :isMain = 'false'
    />
    <Post />
    <Articles isBlog />
    <Pagination />
    <Footer />
  </div>
</template>