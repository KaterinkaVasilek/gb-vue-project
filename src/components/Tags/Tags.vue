<script setup>
import './tags.scss';
import { ref } from 'vue';
import { dataArticles } from '@/data/data.js';

const articles = JSON.parse(dataArticles);
const tagItem = ref(null);

const tags = [
  'Kitchen',
  'Bedroom',
  'Building',
  'Architecture',
  'Kitchen Planning',
  'Bathroom'
]

const showArticle = (e) => {
  tags.forEach(tag => {
    // console.log(tag);
    articles.forEach(obj => {
      console.log(e.currentTarget);
      if(e.currentTarget) {
        
      }
      
      // console.log(obj);
    })
  })
  //   const filteredArticle = articles.filter((obj) => {

  //   });
  // return filteredArticle;
}

</script>

<template>
  <div class="tags">
    <h2 class="tags__title">Tags</h2>
    <ul class="tags__list">
      <li class="tags__item" v-for="tag in tags" :key="index" ref="tagItem">
        <label class="tags__label">{{ tag }}
          <input class="tags__input" type="radio" @click="showArticle">
        </label>
      </li>
    </ul>
  </div>
</template>