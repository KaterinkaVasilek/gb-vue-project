<script setup>
import './intro.scss';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
import Link from '@/components/Link/link.vue';
import { ref } from 'vue';

const introLinkTitle = ref('Get Started')

const props = defineProps({
  heading: String,
  isMain: Boolean,
  isArticle: Boolean,
  isProjects: Boolean,
  currentLink: String,
  isProjectDetail: Boolean
})

</script>

<template>
  <section class="intro common" :class="{ 'intro--blog': !isMain, 
                                          'intro--article' : isArticle, 
                                          'intro--projects' : isProjects,
                                          'intro--projects-detail' : isProjectDetail }">
    <div class="intro__wrapper common__wrapper container">
      <div class="intro__content" :class="{ 'intro__content--params': !isMain }">
        <div class="intro__heading" :class="{ 'intro__heading--params': !isMain, 
                                              'intro__heading--none': isArticle,
                                              'intro__heading--none': isProjectDetail  } ">
          <h1 class="intro__title" :class="{ 'intro__title--params': !isMain }">{{ heading || 'Let Your Home Be Unique' }}</h1>
          <Breadcrumbs v-show="!isMain" :currentLink="currentLink" />
          <div class="intro__info" v-show="isMain">
            <p class="intro__subtitle">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            <Link :linkTitle = introLinkTitle />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>