<script setup>
import './nav.scss';



</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li>
        <router-link class="nav__link" to='/'>Home</router-link>
      </li>
      <li>
        <router-link class="nav__link" to='/blog'>Blog</router-link>
      </li>
      <li>
        <router-link class="nav__link" to='/project'>Project</router-link>
      </li>
    </ul>
  </nav>
</template>