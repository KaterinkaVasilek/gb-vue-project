<script setup>
import './intro.scss';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';

const props = defineProps({
  heading: String,
  isMain: Boolean,
  isArticle: Boolean,
  isProjects: Boolean,
  currentLink: String
})

</script>

<template>
  <section class="intro common" :class="{ 'intro--blog': !isMain, 'intro--article' : isArticle, 'intro--projects': isProjects }">
    <div class="intro__wrapper common__wrapper container">
      <div class="intro__content" :class="{ 'intro__content--params': !isMain }">
        <div class="intro__heading" :class="{ 'intro__heading--params': !isMain, 
                                              'intro__heading--none': isArticle } ">
          <h1 class="intro__title" :class="{ 'intro__title--params': !isMain }">{{ heading || 'Let Your Home Be Unique' }}</h1>
          <Breadcrumbs v-show="!isMain" :currentLink="currentLink" />
          <div class="intro__info" v-show="isMain">
            <p class="intro__subtitle">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            <a class="intro__link" href="#">Get Started
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>