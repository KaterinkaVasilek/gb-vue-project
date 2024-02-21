<script setup>
import { useIndexStore } from '../../stores';
const store = useIndexStore();

const currentCategory = () => {
  return Array.from(store.projects[3].categoryProjects);
}

</script>

<template>
  <ul class="projects-tabs__list common">
    <li class="projects-tabs__item" v-for="item in currentCategory()" :key="id">
      <router-link class="project-tabs__item" :to="`/project-detail/${item.id}`">
        <img class="projects-tabs__img" :src="item.src" alt="Фото проекта ванной комнаты.">
        <div class="projects-tabs__info">
          <div class="projects-tabs__left">
            <p class="projects-tabs__name">{{ item.name }}</p>
            <p class="projects-tabs__tags">{{ item.tag1 }} / {{ item.tag2 }}</p>
          </div>
          <span class="common__arrow"></span>
        </div>
      </router-link>
    </li>
  </ul>
</template>