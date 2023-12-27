<script setup>
import './header.scss'
import Logo from '@/components/Logo/Logo.vue';
import Nav from '@/components/Nav/Nav.vue';
</script>

<template>
  <header class="header common">
    <div class="header__wrapper container">
      <Logo />
      <Nav />
    </div>
  </header>
</template>