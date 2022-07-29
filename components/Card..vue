<template>
  <div class="card-wrapper">
    <div class="card">
      <img :src="item.icon" alt="" class="card-icon" />
      <h3 class="mb-[16px] mt-[40px] font-bold">{{ item.title }}</h3>
      <slot class="cursor-pointer" name="content"></slot>
      <p class="mt-[24px] text-[#f74780] cursor-pointer">Get Started</p>
    </div>

    <div class="card-modal-wrapper">
      <div class="card-modal">
        <!-- <div class="relative"> -->
        <div class="c-centered flex flex-col items-center justify-center">
          <span class="text-[#fff] font-bold text-xl mb-6">{{ item.price }}</span>
          <custom-button @click="addToCart(item)" class="" sm :btn-bg="'#13183f'"
            >Add to cart</custom-button
          >
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- <div className="main-card">
      Main Card
      <div className="modal-wrapper">
        <div className="modal-content">price: $300</div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import CustomButton from "./CustomButton.vue";
import { useCartStore } from '~~/store/cart'

const cartStore = useCartStore()

const props = defineProps({
  item: Object,
});

const addToCart = (item) => {
  cartStore.cart.push(item)
};
</script>

<style scoped>
.card-wrapper {
  height: 300px;
  position: relative;
}
.card {
  background: #fff;
  padding: 24px;
  position: relative;
  border-radius: 16px;
  height: 100%;
}

.card-icon {
  position: absolute;
  top: -16px;
}

.card-modal-wrapper {
  display: none;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.551);
  border-radius: 16px;
  top: 0;
  height: 100%;
}

.card-modal {
  background: #fff;
  z-index: 99999999;
}

.card:hover + .card-modal-wrapper {
  display: block;
}

.main-card {
  max-width: 400px;
  height: 400px;
  text-align: center;
  background: green;
  position: relative;
  margin-bottom: 50px;
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
}
.modal-content {
  background: #fff;
  padding: 20px 10px;
}
.main-card:hover .modal-wrapper {
  display: block !important;
}
</style>
