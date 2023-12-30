<script setup>
import './benefits.scss';
import { ref } from 'vue';

const benefits = ref([
  {
    id: 1,
    num: 12,
    text: 'Years Of Experiance'
  },
  {
    id: 2,
    num: 85,
    text: 'Success Project'
  },
  {
    id: 3,
    num: 15,
    text: 'Active Project<'
  },
  {
    id: 4,
    num: 95,
    text: 'Happy Customers'
  }
])

</script>

<template>
  <section class="benefits common">
    <div class="benefits__wrapper common__wrapper">
      <div class="benefits__content container">
        <ul class="benefits__list">
          <li class="benefits__item" v-for="item in benefits" :key="item.id">
            <p class="benefits__num">{{ item.num }}</p>
            <p class="benefits__text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>