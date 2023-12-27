<script setup>
import Header from '@/components/Header/Header.vue';
import Intro from '@/components/Intro/Intro.vue';
import Projects from '@/components/Projects/Projects.vue';
import Benefits from '@/components/Benefits/Benefits.vue';
import Articles from '@/components/Articles/Articles.vue';
import Footer from '@/components/Footer/Footer.vue';

</script>

<template>
  <div class="main-container">
    <Header />
    <Intro isMain
    />
    <Projects />
    <Benefits />
    <Articles isMain />
    <Footer />
  </div>
</template>
