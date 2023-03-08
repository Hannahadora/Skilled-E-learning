import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
          cart: [],
        };
      },
    
    actions: {
      emptyCart() {
        this.cart = []
      }
    }
  })