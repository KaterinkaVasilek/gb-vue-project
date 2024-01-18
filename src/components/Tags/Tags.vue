<script setup>
import './tags.scss';
import { ref } from 'vue';
import { dataArticles } from '@/data/data.js';

const articles = JSON.parse(dataArticles);
const tagItem = ref(null);

const tags = [
  {
    id: 0,
    tagName: 'Kitchen'
  },
  {
    id: 1,
    tagName: 'Bedroom'
  },
  {
    id: 2,
    tagName: 'Building'
  },
  {
    id: 3,
    tagName: 'Architecture'
  },
  {
    id: 4,
    tagName: 'Kitchen Planning'
  },
  {
    id: 5,
    tagName: 'Bathroom'
  }
]

const showArticle = (e) => {
  e.currentTarget.closest
  articles.forEach(obj => {
    console.log(e.currentTarget.id, 'test');
    console.log(obj.id);
    if(e.currentTarget.id === obj.id) {
      console.log('hello');
    }
  })
}

</script>

<template>
  <div class="tags">
    <h2 class="tags__title">Tags</h2>
    <ul class="tags__list">
      <li class="tags__item" v-for="tag in tags" :key="id" ref="tagItem">
        <label class="tags__label">{{ tag.tagName }}
          <input class="tags__input" :id="tag.id" type="radio" @click="showArticle">
        </label>
      </li>
    </ul>
  </div>
</template>