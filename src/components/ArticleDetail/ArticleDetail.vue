<script setup>
import './article-detail.scss';
import { reactive } from 'vue';
import Article from '@/components/Article/Article.vue';
import { useIndexStore } from '../../stores';
const store = useIndexStore();

const data = reactive({
 tagId: null
})

const setId = (e) => {
  data.tagId = e.currentTarget.id;
}

</script>

<template>
  <Article :currentTag="data.tagId" />
  <div class="article-detail">
    <h2 class="article-detail__title">Tags</h2>
    <ul class="article-detail__list">
      <li 
        class="article-detail__item" 
        v-for="tag in store.tags" 
        :key="tag.id" 
        :class="{ 'article-detail__item--active' : data.tagId == tag.id }"
      >
        <label class="article-detail__label">{{ tag.tagName }}
          <input class="article-detail__input" :id="tag.id" type="radio" @click="setId">
        </label>
      </li>
    </ul>
  </div>
</template>