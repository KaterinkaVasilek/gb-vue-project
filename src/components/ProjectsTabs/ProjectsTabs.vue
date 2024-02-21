<script setup>
import './projects-tabs.scss';
import Bathroom from '@/components/Bathroom/Bathroom.vue';
import Bedroom from '@/components/Bedroom/Bedroom.vue';
import Kitchan from '@/components/Kitchan/Kitchan.vue';
import Living from '@/components/Living/Living.vue';

</script>

<template>
  <div class="projects-tabs container">
    <Bathroom />
    <Bedroom />
    <Kitchan />
    <Living />
  </div>
</template>