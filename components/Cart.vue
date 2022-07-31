<template>
  <div class="bg-[#fff] rounded-l p-6 shadow">
    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="w-full flex items-center justify-between p-4 border-b"
    >
      <div class="flex items-center">
        <img class="mr-3" :src="item.icon" alt="" />
        <h4>{{ item.title }}</h4>
      </div>
      <div class="flex items-center">
        <div class="flex items-center border">
            <span class="alt-qty">-</span>
            <input class="bg-transparent" type="number" v-model="item.quantity">
            <span class="alt-qty">+</span>
        </div>
        <p>{{item.price}}</p>
      </div>
    </div>

    <div v-if="cartItems.length === 0">
        Empty Cart
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/store/cart";
const cartStore = useCartStore();
const cartItems = cartStore.cart || 0;

</script>

<style>
.alt-qty {
    border: 1px solid #0f0e0e;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
</style>
