<script setup>
import './articles.scss';
import { computed } from 'vue';

import { useIndexStore } from '../../stores';
const store = useIndexStore();

const props = defineProps({
  max: Boolean,
  isMain: Boolean,
  isBlog: Boolean
})


const spliceList = computed(() => {
  return props.isMain ? store.articles.splice(0, 3) : store.articles;
})

</script>

<template>
  <section class="articles common">
    <div class="articles__wrapper common__wrapper container" :class="{ 'common__wrapper--mb': isBlog }">
      <div class="common__heading common__heading--mb" :class="{ 'common__heading--mw': isBlog }">
        <h2 class="common__title" :class="{ 'common__title--params': isBlog }">Articles & News</h2>
        <p class="common__subtitle" v-if="isMain">It is a long established fact that a reader will be distracted by the of readable
          content of a page when lookings at its layouts the points of using.</p>
      </div>
      <ul class="articles__list">
        <li class="articles__item" v-for="(item) in spliceList" :key="id">
          <router-link class="articles__link" to="/article">
            <img class="articles__img" :src="item.src" width="623" height="415" alt="Фото статьи.">
            <span class="articles__tag">{{ item.tag }}</span>
            <h3 class="articles__title">{{ item.title }}</h3>
            <div class="articles__bottom">
              <p class="articles__date">{{ item.date }}</p>
              <span class="common__arrow"></span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>