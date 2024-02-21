<script setup>
import './tabs.scss';
import { useIndexStore } from '../../stores';
const store  = useIndexStore();

</script>

<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li class="tabs__item" v-for="el in store.projects" :key="id">
        <RouterLink class="tabs__btn" :to="el.path">{{ el.category }}</RouterLink>
      </li>
    </ul>
  </div>
</template>