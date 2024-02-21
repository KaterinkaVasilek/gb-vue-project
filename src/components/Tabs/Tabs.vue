<script setup>
import './tabs.scss';
import { dataProjects } from '@/data/dataProjects.js';

const projects = JSON.parse(dataProjects);

</script>

<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li class="tabs__item" v-for="el in projects" :key="id">
        <RouterLink class="tabs__btn" active-class="tabs__btn--active" :to="el.path">{{ el.category }}</RouterLink>
      </li>
    </ul>
  </div>
</template>