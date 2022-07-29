import { defineStore } from "pinia";

export const useStore = defineStore('cart', {
    state: () => {
        return {
          cart: [],
        };
      },
    
  })