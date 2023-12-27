<script setup>
import './footer.scss'
import { ref } from 'vue';
import Icon from '@/components/Icon/Icon.vue';
import Logo from '@/components/Logo/Logo.vue';
import Nav from '@/components/Nav/Nav.vue';

const socialLinks = ref([
  {
    id: 1,
    href: '#',
    name: 'twitter',
    alt: 'Твиттер.'
  },
  {
    id: 2,
    href: '#',
    name: 'linkedin',
    alt: 'Линкедин.'
  },
]);

</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__left">
        <Logo />
        <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
        <ul class="footer__social">
          <li class="footer__social-link" v-for="link in socialLinks" :key="id">
            <a :href=link.href>
              <Icon width="19" height="16" :name=link.name :alt=link.alt />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__center">
        <h2 class="footer__title">Pages</h2>
        <Nav />
      </div>
      <div class="footer__right">
        <h2 class="footer__title">Contacts</h2>
        <ul class="footer__contacts">
          <li>
            <address class="footer__address">55 East Birchwood Ave. Brooklyn, New York 11201</address>
          </li>
          <li>
            <a href="mailto:contact@interno.com">contact@interno.com</a>
          </li>
          <li>
            <a href="tel:1234567890">(123) 456 - 7890</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>