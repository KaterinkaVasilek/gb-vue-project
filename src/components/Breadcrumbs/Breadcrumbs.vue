<script setup>
import './breadcrumbs.scss'
</script>

<template>
  <div class="breadcrumbs">
    <router-link class="breadcrumbs__link" to="/">Home /</router-link>
    <router-link class="breadcrumbs__link intro__link--disabled" to="#">Blog</router-link>
  </div>
</template>