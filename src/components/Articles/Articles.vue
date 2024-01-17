<script setup>
import './articles.scss';
import { ref, computed } from 'vue';

const props = defineProps({
  max: Boolean,
  isMain: Boolean,
  isBlog: Boolean
})

const articles = [
  {
    id: 1,
    src: '/img/articles-1.jpg',
    tag: 'Kitchen',
    title: 'Let’s Get Solution For Building Construction Work',
    date: '26 December,2022'
  },
  {
    id: 2,
    src: '/img/articles-2.jpg',
    tag: 'Bedroom',
    title: 'Low Cost Latest Invented Interior Designing Ideas.',
    date: '26 December,2022'
  },
  {
    id: 3,
    src: '/img/articles-3.jpg',
    tag: 'Building',
    title: 'Best For Any Office & Business Interior Solution',
    date: '22 December,2022'
  },
  {
    id: 4,
    src: '/img/articles-4.jpg',
    tag: 'Architecture',
    title: 'Let’s Get Solution For Building Construction Work',
    date: '26 December,2022'
  },
  {
    id: 5,
    src: '/img/articles-5.jpg',
    tag: 'Kitchen Planning',
    title: 'Low Cost Latest Invented Interior Designing Ideas.',
    date: '22 December,2022'
  },
  {
    id: 6,
    src: '/img/articles-6.jpg',
    tag: 'Bathroom',
    title: 'Best For Any Office & Business Interior Solution',
    date: '25 December,2022'
  }
]

const spliceList = computed(() => {
  return props.isMain ? articles.splice(0, 3) : articles;
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