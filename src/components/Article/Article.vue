<script setup>
import './article.scss';
import Quote from '@/components/Quote/Quote.vue';
import { dataArticles } from '@/data/data.js';

const articles = JSON.parse(dataArticles);

</script>

<template>
  <div class="article common" v-for="article in articles" :key="id">
    <div class="common__wrapper">
      <div class="article__wrapper">
        <div class="article__desk">
          <h2 class="common__title">{{ article.mainTitle }}</h2>
          <img class="article__img" :src="article.src" :alt="article.alt">
          <div class="article__details">
            <p>{{ article.date }}</p>
            <p>{{ article.keywords }}</p>
          </div>
          <p class="article__text">{{ article.text }}</p>
          <Quote />
        </div>
      </div>
      <div class="article__info">
        <h2 class="common__title">{{ article.secondaryTitle }}</h2>
        <p>{{ article.descText }}</p>
      </div>
    </div>
  </div>
</template>