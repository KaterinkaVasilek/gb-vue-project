<script setup>
import './projects.scss'
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    src: "/img/projects-1.jpg",
    title: "Modern Kitchan",
    desc: "Decor / Artchitecture"
  },
  {
    id: 2,
    src: "/img/projects-2.jpg",
    title: "Modern Kitchan",
    desc: "Decor / Artchitecture"
  },
  {
    id: 3,
    src: "/img/projects-3.jpg",
    title: "Modern Kitchan",
    desc: "Decor / Artchitecture"
  },
  {
    id: 4,
    src: "/img/projects-4.jpg",
    title: "Modern Kitchan",
    desc: "Decor / Artchitecture"
  }
]);

</script>

<template>
  <section class="projects common">
    <div class="common__wrapper container">
      <div class="common__heading">
        <h2 class="common__title">Follow Our Projects</h2>
        <p class="common__subtitle">It is a long established fact that a reader will be distracted by the of readable
          content of page lookings at its layouts points.</p>
      </div>
      <div class="projects__content">
        <ul class="projects__list">
          <li class="projects__item" v-for="project in projects" :key="project.id">
            <a href="#">
              <img class="projects__img projects__img--btr" :src="project.src" width="548" height="525"
                alt="Проект.">
              <div class="projects__action">
                <div class="projects__text">
                  <h3 class="projects__title">{{ project.title }}</h3>
                  <p class="projects__desc">{{ project.desc }}</p>
                </div>
                <span class="common__arrow"></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>