import { defineStore } from "pinia";
import { computed } from 'vue';
import { dataArticles } from '@/data/dataArticles.js';

const articles = JSON.parse(dataArticles);

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      article: {
        currentTag: 0
      },
      currentArticle: computed(() => {
        if(this.currentTag) {
          return articles[this.currentTag]
        }
        return null
      })
    };
  },

  actions: {

  }
});