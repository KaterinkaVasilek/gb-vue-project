<script setup>
  import Header from '@/components/Header/Header.vue';
  import Intro from '@/components/Intro/Intro.vue';
  import Footer from '@/components/Footer/Footer.vue';
  import ProjectContent from '@/components/ProjectContent/ProjectContent.vue';
  import { useIndexStore } from '../../stores';
  const store = useIndexStore();

</script>

<template>
  <div>
    <Header />
    <Intro :isProjectDetail = 'true'
           :isMain = 'false'
    />
    <ProjectContent />
    <Footer />
  </div>
</template>