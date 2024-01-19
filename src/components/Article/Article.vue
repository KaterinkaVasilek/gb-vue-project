<script setup>
import './article.scss';
import { computed } from 'vue';
import Quote from '@/components/Quote/Quote.vue';
import { dataArticles } from '@/data/dataArticles.js';

const articles = JSON.parse(dataArticles);

const props = defineProps({
  currentTag: Number
})

const currentArticle = computed(() => {
  if(props.currentTag) {
    return articles[props.currentTag]
  }
  return null
})

</script>

<template>
  <div class="article common">
    <div class="common__wrapper" v-if="currentArticle">
      <div class="article__wrapper">
        <div class="article__desk">
          <h2 class="common__title">{{ currentArticle.mainTitle }}</h2>
          <img class="article__img" :src="currentArticle.src" :alt="currentArticle.alt">
          <div class="article__details">
            <p>{{ currentArticle.date }}</p>
            <p>{{ currentArticle.keywords }}</p>
          </div>
          <p class="article__text">{{ currentArticle.text }}</p>
          <Quote />
        </div>
      </div>
      <div class="article__info">
        <h2 class="common__title">{{ currentArticle.secondaryTitle }}</h2>
        <p>{{ currentArticle.descText }}</p>
      </div>
    </div>
  </div>
</template>