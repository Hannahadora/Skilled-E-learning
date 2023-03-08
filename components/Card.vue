<template>
  <div class="main-card">
    <div class="card">
      <img :src="item.icon" alt="" class="card-icon" />
      <div class="modal-card-icon h-[56px] w-[56px]"></div>
      <h3 class="mb-[16px] mt-[40px] font-bold">{{ item.title }}</h3>
      <slot class="cursor-pointer" name="content"></slot>
      <p class="mt-[24px] text-[#f74780] cursor-pointer">Get Started</p>
    </div>
    <div class="modal-wrapper">
      <div class="modal-content">
        <div class="c-centered flex flex-col items-center justify-center">
          <span class="text-[#fff] font-bold text-xl mb-6">{{
            item.price
          }}</span>
          <custom-button
            @click="() => {addToCart(item)}"
            class=""
            sm
            :btn-bg="alreadyInCart(item) ? '#47f75b' : '#13183f'"
            >{{ alreadyInCart(item) ? 'In Cart' : 'Add to cart' }}</custom-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./CustomButton.vue";
import { useCartStore } from "~~/store/cart";

const cartStore = useCartStore();

const props = defineProps({
  item: Object,
});

const addToCart = (item) => {
  if(!alreadyInCart(item)) {
    cartStore.cart.push({...item, quantity: 1});
  } else {
    alert(`${item.title} already in cart`)
  }
};
 
const alreadyInCart = (item) => {
  const x = cartStore.cart?.find(el => el.id === item.id)
  if(x?.id) {
    return true
  } else {
    return false
  }
}
</script>

<style scoped>
.card-icon {
  position: absolute;
  top: -16px;
}
.modal-card-icon {
  position: absolute;
  top: -16px;
  background: rgba(0, 0, 0, 0.551);
  border-radius: 100%;
  display: none !important;
}

.main-card {
  max-width: 400px;
  height: 300px;
  text-align: center;
  background: #fff;
  position: relative;
  padding: 24px;
  border-radius: 16px;
}

@media screen  and (max-width: 768px) {
  .main-card {
    max-width: none;
  }
}
.modal-wrapper {
  display: none !important;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.551);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}
.modal-content {
  background: #fff;
}
.main-card:hover .modal-wrapper {
  display: block !important;
}
.main-card:hover .modal-card-icon {
  display: block !important;
}
</style>
