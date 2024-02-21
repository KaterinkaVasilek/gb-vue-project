<script setup>
import './article.scss';
import { useIndexStore } from "../../stores/index";
import Quote from '@/components/Quote/Quote.vue';

const store = useIndexStore();

const props = defineProps({
  currentTag: Number
})

</script>

<template>
  <div class="article common">
    <div class="common__wrapper" v-if="store.currentArticle">
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