import { createApp } from 'vue';
import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import App from './App.vue';
import Home from '@/pages/MainPage.vue';
import Blog from '@/pages/BlogPage.vue';
import Project from '@/pages/ProjectPage.vue';


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
    path: '/project'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app');
