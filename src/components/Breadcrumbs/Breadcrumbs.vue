<script setup>
import './breadcrumbs.scss';

const props = defineProps({
  currentLink: String
})

</script>

<template>
  <div class="breadcrumbs">
    <router-link class="breadcrumbs__link" to="/">Home /</router-link>
    <router-link class="breadcrumbs__link breadcrumbs__link--disabled" disabled to="#">&nbsp;{{ currentLink }}</router-link>
  </div>
</template>