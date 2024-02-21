<script setup>
  import './error-content.scss'
  import Link from '@/components/Link/link.vue';
  import { ref } from 'vue';

const introLinkTitle = ref('Back To Home')
</script>

<template>
  <div class="error-content">
    <div class="error-content__content container">
      <h1 class="error-content__title">404</h1>
      <p class="error-content__desc">We are sorry, but the page you requested was not found</p>
      <Link :linkTitle = introLinkTitle />
    </div>
    <img class="error-content__img" src="/img/404.jpg" alt="Фото ошибки.">
  </div>
</template>