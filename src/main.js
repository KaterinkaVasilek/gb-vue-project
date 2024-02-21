import { createApp } from 'vue';
import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import Home from '@/pages/MainPage.vue';
import Blog from '@/pages/BlogPage.vue';
import Project from '@/pages/projects/ProjectPage.vue';
import Article from '@/pages/Article.vue';
import Bathroom from '@/pages/projects/BathroomPage.vue';
import Bedroom from '@/pages/projects/BedroomPage.vue';
import Kitchan from '@/pages/projects/KitchanPage.vue';
import Living from '@/pages/projects/LivingPage.vue';

const pinia = createPinia();
const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: Blog,
    path: '/blog'
  },
  {
    component: Project,
    path: '/projects',
    children: [
      {
        name: 'default',
        path: '',
        redirect: {
          path: '/projects/bathroom'
        } 
      },
      {
        name: 'Bathroom',
        path: 'bathroom',
        component: Bathroom
      },
      {
        name: 'Bedroom',
        path: 'bedroom',
        component: Bedroom
      },
      {
        name: 'Kitchan',
        path: 'kitchan',
        component: Kitchan
      },
      {
        name: 'Living',
        path: 'living',
        component: Living
      }
    ]
  },
  {
    component: Article,
    path: '/article'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app');
