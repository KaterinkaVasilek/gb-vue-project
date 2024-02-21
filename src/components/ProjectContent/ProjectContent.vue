<script setup>
import './project-content.scss';
import { useRoute } from 'vue-router'
import { useIndexStore } from '../../stores';
const store = useIndexStore();
const route = useRoute();
const detail = store.getProjectById(route.params.id);

</script>

<template>
  <div class="project-content common">
    <div class="common__wrapper container">
      <h2 class="project-content__title">{{ detail.name }}</h2>
      <p>{{ detail.desc}}</p>
      <img :src="detail.src" alt="">
    </div>
  </div>
</template>