<script setup>
import "@/assets/styles/index.scss";
import Sprite from './assets/svg/sprite.svg?skipsvgo';
import MainPageVue from "./pages/MainPage.vue";

</script>

<template>
  <Sprite class="visually-hidden" />
  <RouterView />
</template>
