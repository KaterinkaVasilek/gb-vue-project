<script setup>
import { ref } from 'vue';
import Header from '@/components/Header/Header.vue';
import Intro from '@/components/Intro/Intro.vue';
import Tabs from '@/components/Tabs/Tabs.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import Footer from '@/components/Footer/Footer.vue';

const title = ref("Our Project");
const currentLinkProject = ref("Project");
</script>

<template>
  <div class="main-container">
    <Header />
    <Intro  :isProjects = 'true'
            :heading = "title" 
            :currentLink = currentLinkProject 
    />
    <Tabs />
    <div class="projects-tabs container">
      <RouterView />
    </div>
    <Pagination />
    <Footer />
  </div>
</template>